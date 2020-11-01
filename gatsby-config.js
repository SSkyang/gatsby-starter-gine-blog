module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/shengkang/da658a6a758d4bfa8522b47f2bbcb64a?v=8492ac8d3be1446dbbdf7fa2825664e9"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/shengkang/940cb2e002cf4cb6a7603f2996d19b98?v=710f64cc7c1f4ad28b2137a99255880b"
            }
        }
    ],
}