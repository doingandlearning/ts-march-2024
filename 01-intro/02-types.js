{
    // 7 primitive types
    // string
    // number
    // boolean
    // null   null?
    // undefined
    // Symbol
    // BigInt (9,007,199,254,740,991)
    var name_1 = "Kevin";
    var newName = name_1;
    newName = "Bob";
    var age = 40;
    // Non-primitive
    // object
    // array
    // function
    // class
}
{
    // any, void, unknown, never
    var name_2 = "Kevin";
    var newName = name_2;
    function log() {
        console.log("I was called - woohoo!");
        // return "Yo!";
    }
    function doSomethingWithAge(age) {
        // I don't know yet!
        if (typeof age === "string") {
            var newAge = age;
        }
    }
    var newVar = void 0;
    newVar = "Kevin";
    function example(x) {
        if (typeof x === "string") {
            return true;
        }
        else if (typeof x === "number") {
            return false;
        }
        // x here is of type 'never' since all possible types have already been covered above.
        var exhaustiveCheck = x;
        return exhaustiveCheck;
    }
    var result = example(true);
}
{
    // enum
    var STATUS_CODE = void 0;
    (function (STATUS_CODE) {
        STATUS_CODE[STATUS_CODE["OK"] = 0] = "OK";
        STATUS_CODE[STATUS_CODE["NOT_FOUND"] = 1] = "NOT_FOUND";
        STATUS_CODE[STATUS_CODE["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
    })(STATUS_CODE || (STATUS_CODE = {}));
    STATUS_CODE.OK;
}
