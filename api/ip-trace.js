// Vercel Serverless Function entry point
export default async function handler(req, res) {
  // 从请求的查询参数中获取 IP
  const ip = req.query.ip;

  if (!ip) {
    // 如果没有提供 IP 参数，返回 400 错误
    return res.status(400).send('Missing IP parameter');
  }

  // 构建目标 API 的 URL
  // 注意：根据提供的搜索结果，这里使用了 http，如果 ip-api.com 支持 https 建议使用 https
  const apiUrl = `http://ip-api.com/json/${ip}?lang=zh-CN`; <mcreference link="http://ip-api.com/json/${ip}?lang=zh-CN" index="0">0</mcreference>

  try {
    // 发起请求到 ip-api.com
    const apiResponse = await fetch(apiUrl);

    if (!apiResponse.ok) {
      // 如果上游 API 返回非 2xx 状态码
      const errorText = await apiResponse.text();
      console.error(`Error fetching from ip-api.com: ${apiResponse.status} - ${errorText}`);
      return res.status(apiResponse.status).send(`Error fetching IP trace from upstream API: ${errorText}`);
    }

    // 获取上游 API 的响应体
    const data = await apiResponse.json();

    // 设置 CORS 头部，允许您的前端域名访问
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名访问，或者指定您的前端域名
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 将 ip-api.com 的响应直接返回给前端
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error fetching from ip-api.com:', error);
    // 捕获网络或其他错误
    return res.status(500).send('Error fetching IP trace from upstream API');
  }
}
