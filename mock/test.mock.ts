import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock([
    {
        url: '/api/test',
        method: 'GET',
        body: { code: 200, data: [{ a: 1, b: 2 }], message: '操作成功' },
    },
    {
        url: '/api/test1',
        method: 'GET',
        body: { code: 200, data: [{ a: 1, b: 2 }], message: '操作成功' },
    },
]);
