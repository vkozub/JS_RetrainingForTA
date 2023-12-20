const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('Task 2', () => {
    test('Verify that uerList array contains "admin" element', () => {
        expect(userList).toContain('admin');
    });

    test('Verify that uerList array first element is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });

    test('Verify that uerList array last element is "new_user_2"', () => {
        expect(userList[userList.length-1]).toBe('new_user_2');
    });

    test('Verify that uerList array contains 5 elements', () => {
        expect(userList.length).toBe(5);
    });

    test('Verify that uerList array 3rd element has a String type', () => {
        expect(typeof userList[2]).toBe('string');
    });

    test('Verify that uerList array has no 8th element', () => {
        expect(userList[7]).toBeUndefined();
        expect(userList.length).toBeLessThan(6);
    });
});