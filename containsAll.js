if (window.DOMTokenList && !DOMTokenList.prototype.containsAll) {
  DOMTokenList.prototype.containsAll = function() {
    const cls = Array.isArray(arguments[0])
      ? arguments[0]
      : arguments[0].split(",");

    // Return if a class doesn't exists
    for (const cl of cls) {
      if (!this.contains(cl.trim())) return false;
    }

    return true;
  };
}