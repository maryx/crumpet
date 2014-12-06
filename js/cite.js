/**
   Parses \cite{#reference} into <a href='#reference>(Author, Year)</a>
*/

var references = {
    book1: {
        authorLastName: 'Knuth',
        authorFirstName: 'Donald',
        title: 'Concrete Mathematics',
        year: 1994,
        publisher: 'Addison-Wesley',
        address: 'Reading'
    }
};

function parseLinks() {
    var linkRegex = /(\\cite{)([^}]*)(})/g,
        hrefEnd = '</a>';
    $('body').html(
        $('body').html().replace(linkRegex, function($0, $1, $2) {
            var href = '<a href="#' + $2 + '">',
            citation = '(' + references[$2].authorLastName + ', ' + references[$2].year + ')';
            return href + citation + hrefEnd;
        })
    );    
}
