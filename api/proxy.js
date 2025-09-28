const TARGET = 'https://codelang.vercel.app/api';

function setCorsHeaders(req, res) {
  const origin = String(req.headers.origin || '');
  const originLC = origin.toLowerCase();

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const reqHdrs = req.headers['access-control-request-headers'];
  res.setHeader(
    'Access-Control-Allow-Headers',
    reqHdrs ? String(reqHdrs) : 'Content-Type, Authorization'
  );

  const reqMethod = req.headers['access-control-request-method'];
  res.setHeader(
    'Access-Control-Allow-Methods',
    reqMethod ? String(reqMethod) : 'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );

  res.setHeader('Access-Control-Max-Age', '86400');
}

function rewriteSetCookie(cookies) {
  if (!cookies || !cookies.length) return [];
  return cookies.map((c) => {
    let v = c.replace(/;\s*Domain=[^;]+/i, '');
    v = v.replace(/;\s*SameSite=[^;]+/i, '');
    if (!/;\s*SameSite=/i.test(v)) v += '; SameSite=None';
    if (!/;\s*Secure/i.test(v)) v += '; Secure';
    return v;
  });
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const { path = '', ...rest } = req.query || {};
  const url = new URL(`${TARGET}/${path}`);

  for (const [k, v] of Object.entries(rest)) {
    if (Array.isArray(v)) v.forEach((vv) => url.searchParams.append(k, vv));
    else if (v != null) url.searchParams.set(k, String(v));
  }

  let body;
  if (typeof req.body === 'string') body = req.body;
  else if (req.body && Object.keys(req.body).length) body = JSON.stringify(req.body);

  const upstream = await fetch(url, {
    method: req.method,
    headers: {
      'content-type': req.headers['content-type'],
      authorization: req.headers['authorization'],
      cookie: req.headers['cookie'],
      'accept-encoding': 'identity',
    },
    body,
    redirect: 'manual',
  });

  res.status(upstream.status);

  const skip = new Set([
    'set-cookie',
    'content-encoding',
    'content-length',
    'transfer-encoding',
    'access-control-allow-origin',
    'access-control-allow-credentials',
    'access-control-allow-headers',
    'access-control-allow-methods',
    'access-control-max-age',
    'vary',
  ]);
  upstream.headers.forEach((value, key) => {
    if (!skip.has(key.toLowerCase())) {
      res.setHeader(key, value);
    }
  });

  const cookies = upstream.headers.getSetCookie
    ? upstream.headers.getSetCookie()
    : upstream.headers.get('set-cookie')
    ? [upstream.headers.get('set-cookie')]
    : [];

  const rewritten = rewriteSetCookie(cookies);
  if (rewritten.length) res.setHeader('set-cookie', rewritten);

  const buf = Buffer.from(await upstream.arrayBuffer());
  res.send(buf);
}
