interface String {
  format(...params: any[]): string;
}

String.prototype.format = function (...params: any[]): string {
  return this.replace(/{(\w+)}/g, (match: string, key: string) => {
    const value = params.shift();
    if (value !== undefined) {
      return encodeURIComponent(value);
    }
    
return match;
  });
};
