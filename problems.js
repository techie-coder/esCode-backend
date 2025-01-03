const Problems = [
    {
      "problemId": "1",
      "title": "1. Two Sum",
      "acceptance": "53.8%",
      "difficulty": "Easy",
      "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Use eval to pass the lists in python.",
      "testCases": [
        { "input": "nums = [2,7,11,15], target = 9", "output": "[0,1]" },
        { "input": "nums = [3,2,4], target = 6", "output": "[1,2]" },
        { "input": "nums = [3,3], target = 6", "output": "[0,1]" }
      ],
      "sampleOutput": "For the input nums = [2,7,11,15] and target = 9, the function should return [0,1] because nums[0] + nums[1] == 9",
      "stdin": ["4\n2\n7\n11\n15\n9","3\n-1\n-2\n-3\n-4\n1\n-5","2\n3\n3\n6","4\n1\n2\n3\n4\n10","3\n1000000\n500000\n250000\n1500000"],
      "stdout": ["0,1\n", "1,3\n", "0,1\n", "\n", "0,1\n"]
    },
    {
      "problemId": "2",
      "title": "2. Add Two Numbers",
      "acceptance": "44.2%",
      "difficulty": "Medium",
      "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      "testCases": [
        { "input": "L1 = [2,4,3], L2 = [5,6,4]", "output": "[7,0,8]" },
        { "input": "L1 = [0], L2 = [0]", "output": "[0]" },
        { "input": "L1 = [9,9,9,9], L2 = [9,9,9,9,9,9,9]", "output": "[8,9,9,9,0,0,0,1]" }
      ],
      "sampleOutput": "For the input l1 = [2,4,3] and l2 = [5,6,4], the function should return [7,0,8] because 342 + 465 = 807",
      "stdin": ["3\n2\n4\n3\n3\n5\n6\n4","1\n0\n1\n0","4\n9\n9\n9\n9\n7\n9\n9\n9\n9\n9\n9\n9\n9\n9","9\n9\n9\n1"],
      "stdout": ["7,0,8\n","0\n","8,9,9,9,0,0,0,1\n","0,0,0,1\n"]
    },
    {
      "problemId": "3",
      "title": "3. Longest Substring Without Repeating Characters",
      "acceptance": "33.8%",
      "difficulty": "Medium",
      "description": "Given a string s, find the length of the longest substring without repeating characters.",
      "testCases": [
        { "input": "s = 'abcabcbb'", "output": "3" },
        { "input": "s = 'bbbbb'", "output": "1" },
        { "input": "s = 'pwwkew'", "output": "3" }
      ],
      "sampleOutput": "For the input s = 'abcabcbb', the function should return 3 because the longest substring without repeating characters is 'abc'",
      "stdin": ['abcabcbb','bbbb','pwwkew','aaaaaa','abcABC!@#'],
      "stdout": ['3\n','1\n','3\n','1\n','9\n']
    },
    {
      "problemId": "4",
      "title": "4. Median of Two Sorted Arrays",
      "acceptance": "41.5%",
      "difficulty": "Hard",
      "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. Print upto 2 decimal places",
      "testCases": [
        { "input": "nums1 = [1,3], nums2 = [2]", "output": "2.00000" },
        { "input": "nums1 = [1,2], nums2 = [3,4]", "output": "2.50000" },
        { "input": "nums1 = [0,0], nums2 = [0,0]", "output": "0.00000" }
      ],
      "sampleOutput": "For the input nums1 = [1,3] and nums2 = [2], the function should return 2.00000 because the median of the combined sorted array [1,2,3] is 2",
      "stdin": ["2\n1\n3\n1\n2", "2\n1\n2\n2\n3\n4", "2\n0\n0\n2\n0\n0", "1\n1\n1\n2", "3\n1\n100\n200\n3\n2\n3\n300"],
      "stdout": ["2.00\n", "2.50\n", "0.00\n", "1.50\n", "51.50\n"]
    },
    {
      "problemId": "5",
      "title": "5. Longest Palindromic Substring",
      "acceptance": "41.5%",
      "difficulty": "Medium",
      "description": "Given a string s, return the longest palindromic substring in s.",
      "testCases": [
        { "input": "s = 'babad'", "output": "bab" },
        { "input": "s = 'cbbd'", "output": "bb" },
        { "input": "s = 'a'", "output": "a" }
      ],
      "sampleOutput": "For the input s = 'babad', the function should return 'bab' (or 'aba') as it is the longest palindromic substring",
      "stdin": ['babad', 'cbbd', 'a', 'abcde', 'racecar'],
      "stdout": ['bab\n', 'bb\n', 'a\n', 'a\n', 'racecar\n']
    },
    {
      "problemId": "6",
      "title": "6. ZigZag Conversion",
      "acceptance": "53.8%",
      "difficulty": "Medium",
      "description": "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
      "testCases": [
        { "input": "s = 'PAYPALISHIRING', numRows = 3", "output": "'PAHNAPLSIIGYIR'" },
        { "input": "s = 'PAYPALISHIRING', numRows = 4", "output": "'PINALSIGYAHRPI'" },
        { "input": "s = 'A', numRows = 1", "output": "'A'" }
      ],
      "sampleOutput": "For the input s = 'PAYPALISHIRING' and numRows = 3, the function should return 'PAHNAPLSIIGYIR'",
      "stdin": ['PAYPALISHIRING\n3', 'PAYPALISHIRING\n4', 'A\n1'],
      "stdout": ['PAHNAPLSIIGYIR\n', 'PINALSIGYAHRPI\n', 'A\n']
    },
    {
      "problemId": "7",
      "title": "7. Reverse Integer",
      "acceptance": "28.1%",
      "difficulty": "Medium",
      "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
      "testCases": [
        { "input": "x = 123", "output": "321" },
        { "input": "x = -123", "output": "-321" },
        { "input": "x = 120", "output": "21" }
      ],
      "sampleOutput": "For the input x = 123, the function should return 321",
      "stdin": ['123', '-123', '120', '1534236469', '0'],
      "stdout": ['321\n', '-321\n', '21\n', '0\n', '0\n']
    },
    {
      "problemId": "8",
      "title": "8. String to Integer (atoi)",
      "acceptance": "16.6%",
      "difficulty": "Medium",
      "description": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
      "testCases": [
        { "input": "s = '42'", "output": "42" },
        { "input": "s = '   -42'", "output": "-42" },
        { "input": "s = '4193 with words'", "output": "4193" }
      ],
      "sampleOutput": "For the input s = '42', the function should return 42",
      "stdin": ['42', '   -42', '4193 with words'],
      "stdout": ["42\n", "-42\n", "4193\n"]
    },
    {
      "problemId": "9",
      "title": "9. Palindrome Number",
      "acceptance": "55.3%",
      "difficulty": "Easy",
      "description": "Given an integer x, return x if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward.",
      "testCases": [
        { "input": "x = 121", "output": "true" },
        { "input": "x = -121", "output": "false" },
        { "input": "x = 10", "output": "false" }
      ],
      "sampleOutput": "For the input x = 121, the function should return true because 121 reads as 121 from left to right and from right to left",
      "stdin": ['121', '1230321', '123', '4554', '-11'],
      "stdout": ['121\n', '1230321\n', '\n', '4554\n', '\n']
    },
    {
      "problemId": "10",
      "title": "10. Regular Expression Matching",
      "acceptance": "44.2%",
      "difficulty": "Hard",
      "description": "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element.",
      "testCases": [
        { "input": "s = 'aa', p = 'a'", "output": "false" },
        { "input": "s = 'aa', p = 'a*'", "output": "true" },
        { "input": "s = 'ab', p = '.*'", "output": "true" }
      ],
      "sampleOutput": "For the input s = 'aa' and p = 'a*', the function should return true because '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes 'aa'",
      "stdin": ["aa\na", "aa\na*", "ab\n.*"],
      "stdout": ['False\n', 'True\n', 'True\n']
    },
    {
      "problemId": "11",
      "title": "11. Add Two Numbers(for testing, don't attmept)",
      "acceptance": "44.2%",
      "difficulty": "Hard",
      "description": "Add two numbers",
      "testCases": [
        { "input": "3,5", "output": "8" }
      ],
      "sampleOutput": "sample output",
      "stdin": ["3\n5", "23\n32", "56\n67"],
      "stdout": ['8\n', '55\n', '123\n']
    }
  ];

module.exports = Problems;
