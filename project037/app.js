function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love coding"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
