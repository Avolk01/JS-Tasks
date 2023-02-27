describe("toLowerCaseExceptFirst", function() {
    it("Simple case", function() {
      assert.equal(toLowerCaseExceptFirst("a"), "A");
      assert.equal(toLowerCaseExceptFirst("aAAAaAaaA"), "Aaaaaaaaa");
      assert.equal(toLowerCaseExceptFirst(".ASD"), ".asd");
      assert.equal(toLowerCaseExceptFirst(" asd"), "Asd");
    });

    it("Empty case", function() {
        assert.equal(toLowerCaseExceptFirst(""), "");
    });  

    it("каК Же мне Было БОЛЬНО пиСАТЬ эТИ ТЕСТЫ => Как же мне было больно писать эти тесты", function() {
        assert.equal(toLowerCaseExceptFirst("каК Же мне Было БОЛЬНО пиСАТЬ эТИ ТЕСТЫ"), "Как же мне было больно писать эти тесты");
    });  
});

describe("formatString", function() {

    it("Delete additional spaces", function() {
      assert.equal(formatString("a  b"), "a b");
      assert.equal(formatString("a       b"), "a b");
      assert.equal(formatString("a              b"), "a b");
    });
  
    it("Separators is correct", function() {
        assert.equal(formatString("a,b"), "a, b");
        assert.equal(formatString("a.b"), "a. b");
        assert.equal(formatString("a,b,c,d"), "a, b, c, d");
        assert.equal(formatString("a .b"), "a. b");
        assert.equal(formatString("a , b"), "a, b");
        assert.equal(formatString("a . b"), "a. b");
        assert.equal(formatString("a .b .c .d .e"), "a. b. c. d. e");
        assert.equal(formatString("пробелы , а перед"), "пробелы, а перед");
        assert.equal(formatString("a    !  b"), "a! b");
        assert.equal(formatString("a!b"), "a! b");
        assert.equal(formatString("a    ?  b"), "a? b");
        assert.equal(formatString("a ?b"), "a? b");
    });

    it("Dash is correct", function() {
        assert.equal(formatString("a-b"), "a - b");
        assert.equal(formatString("a -b"), "a - b");
        assert.equal(formatString("a- b"), "a - b");
        assert.equal(formatString("a     -      b"), "a - b");
    });

    it("Test from Slack", function() {
        assert.equal(formatString("Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."),
                                  "Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.");
    });

    it("First and last spaces", function() {
        assert.equal(formatString("     a    -   b     "), "a - b");
        assert.equal(formatString("   a  .    b    "), "a. b");
        assert.equal(formatString(" a .b  "), "a. b");
        assert.equal(formatString("        "), "");
    });
});


describe("calcWordCount", function() {
    it("Simple case", function() {
      assert.equal(calcWordCount("a b c"), 3);
      assert.equal(calcWordCount("a     b c"), 3);
      assert.equal(calcWordCount("a      b      c d"), 4);
      assert.equal(calcWordCount("      aaaa bbb cc d   "), 4);
      assert.equal(calcWordCount(""), 0);
      assert.equal(calcWordCount("          "), 0);
    });
  
    it("Case with delims", function() {
        assert.equal(calcWordCount("a, b, c"), 3);
        assert.equal(calcWordCount("a.     b, c"), 3);
        assert.equal(calcWordCount("a,      b.      c. d"), 4);
        assert.equal(calcWordCount("      aaaa bbb cc d   "), 4);
        assert.equal(calcWordCount(","), 0);
        assert.equal(calcWordCount("   ,    .    .    "), 0);
    });  
})

describe("calcUniqueWordCount", function() {
    it("Simple case", function() {
        let ans1 = new Map();
        ans1.set("a", 1);
        ans1.set("b", 2);
        ans1.set("c", 3);
        ans1.set("aa", 4);
        ans1.set("bb", 5);
        ans1.set("cc", 6);
        let res = calcUniqueWordCount("a! aa? bb, cc, b. b c. bb. ?cc. c .c aa aa aa bb bb bb cc cc cc cc");
        assert.equal(ans1.size == res.size, true);
        for (let key of res.keys())
           assert.equal(res[key] == ans1[key], true);
    });  
})