
export default {
  port: 1337,
  dbUri: 'mongodb://localhost:27017/tutorial-rest-api',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  // yeah these shouldn't be here, but this isn't a production project
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeqwC8R1QgGBQqugwTROgYI4kt
Oo6n2KZpwDKU8/mIHpBjSabeDMxRpeCvhTryFlhJgqQfdy2r3Y8maiO22NyuwztO
k4cR0boduaK8CGvdC3fo84CnwDGdjdTPdzcWT+8uByyezjAZZRg8BqprZS9XcqG/
1ExVAuQxpmfrpzzK9QIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCeqwC8R1QgGBQqugwTROgYI4ktOo6n2KZpwDKU8/mIHpBjSabe
DMxRpeCvhTryFlhJgqQfdy2r3Y8maiO22NyuwztOk4cR0boduaK8CGvdC3fo84Cn
wDGdjdTPdzcWT+8uByyezjAZZRg8BqprZS9XcqG/1ExVAuQxpmfrpzzK9QIDAQAB
AoGAMfhpIuLT+8eZkltFskvhTLjkWvo2M2ZoAqYlSAQOcnAtyRdJFmWxc4VqXdz3
04Z2B7C9P6upFpeQneiPluZ1mZWA+ANYUD/jlo7o8CFoJHKRAqOGZKXLDOUM6nUr
3IT6QBiGkp1IDpnndWOmD2yUIfoQY1jZG/U/w8wRh6gcbAECQQDUujsV3kQsVTYb
teLH77258rV6hcgl3RE0YRdet8aU9WE+ElONxLAaiKfY3yXgK440t2er82MOv746
fmBKLuEtAkEAvvGgu8UjE3xwtu+jis0EZRlg3H1aF/PetGsxH8L2OB0PoO7kzcgj
aaRsv4MyPLwp6MBOHt2l98R8zONYo6bd6QJAQBCJ5M8YZuWOsw+26ZG46LxAjVKm
8Ug/ey/WUu8zvf6cN45bXXGju4n2SqkBhh536EZn0XAuH+39Ay62HwE5TQJAJDBd
e1kIpdfO8Q0IHPVwYMzni8KCQcnpqp4qSE/GJKp1XNYKLWpCM/KC3eU6r0ImW0Of
SsBNhWELGjX4hcPJiQJANRSbFgMCkVM3CWXpC8C19G88QW3hOPpGQ792IWkTrXyj
Kx3n5lr+Q5wIIZlOEuO3WgYAbLqF6OdU3fqWFCAdiQ==
-----END RSA PRIVATE KEY-----`
};