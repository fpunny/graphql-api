const whitelist = [
    'https://www.api.hackthevalley.io',
    'https://api.hackthevalley.io',
];

module.exports =
    process.env.NODE_ENV === 'local'
        ? ['http://lvh.me', ...whitelist]
        : whitelist;
