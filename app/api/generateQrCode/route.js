import QRCode from 'qrcode';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
  }

  try {
    const qrCode = await QRCode.toDataURL(url);
    return new Response(JSON.stringify({ qrCode }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate QR code' }), { status: 500 });
  }
}
