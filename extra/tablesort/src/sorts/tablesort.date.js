// Basic dates in dd/mm/yyyy or dd-mm-yyyy format.
// Years must be 4 digits to have consistent sorting. Days and Months can be 1 or 2 digits.
(function(){
  var parseDate = function(date) {
    date = date.replace(/\-/g, '/');
    date = date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/, '$3-$1-$2'); // format before getTime

    return new Date(date).getTime() || -1;
  };

  Tablesort.extend('date', function(item) {
    return (
      item.search(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*/i) !== -1 ||
      item.search(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/) !== -1 ||
      item.search(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i) !== -1
    ) && !isNaN(parseDate(item));
  }, function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return parseDate(b) - parseDate(a);
  });
}());
