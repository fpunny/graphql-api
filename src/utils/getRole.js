const ROLES = ['HACKER', 'VOLUNTEER', 'ADMIN'];

module.exports = context => {
    const data = context.user[process.env.DATABASE_SECRET];
    if (!data || !ROLES.includes(data.role)) {
        throw new Error('Invalid Role. Please contact Hack The Valley');
    }
    return data.role;
};
