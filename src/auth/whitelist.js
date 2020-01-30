const whitelist = [
    'https://api.hackthevalley.io',
    'https://www.api.hackthevalley.io',
];

module.exports =
    process.env.NODE_ENV === 'local'
        ? ['http://lvh.me', ...whitelist]
        : whitelist;
