var makeBibEntry = function(entry,style,parentSelector) {
  // `entry` is a BibtexParser parser array element, which should look like
  //   { EntryKey:'', EntryType:'', Fields = {field1:'',field2,''} }
  // `style` is the name of the bibliography template to use, e.g., 'chicago'
  // `parentSelector` is the query selector string in which to hang the
  // created bibiography entry, e.g., '#bib2json'
  //
  // Check the console for progress logs and error messages.

  console.log(entry);

  // Select the HTML5 <template> with the classes matching `style` and `EntryType`
  // If that fails, fall back on generic template for `style`.
  try {
    var newEntry = $('template.bib.'+style+'.'+entry.EntryType).content;
  } catch(err) {
    console.log('Could not find template for style: '+style+', type: '+entry.EntryType);
    console.log('Trying generic template for style: '+style);
    try {
      var newEntry = $('template.bib.'+style+'.generic').content;
    } catch(err) {
      console.log('Could not find generic template.');
      console.log(err);
    }
  }

  // Parse the entry fields (Bibtex key-value pairs)
  for (var field in entry.Fields) {
    try {
      newEntry.querySelector('.'+field).textContent = entry.Fields[field];
    } catch(err) {
      console.log('No match for field '+field+' in template.');
    }
  }

  // Set the id of the bibentry element (the element that contains
  // the rest of the template spans, probably a p or li) to match the EntryKey
  // so that hrefs can link to the bibliography entry using the Bibtex key
  try {
    newEntry.querySelector('.bibentry').id = entry.EntryKey;
  } catch(err) {
    console.log('Could not select .bibentry element');
  }

  // Import the filled-out template into the DOM
  try {
    $(parentSelector).appendChild(
      document.importNode(newEntry, true));
  } catch(err) {
      console.log('Could not attach new bibliography entry.');
      console.log(err);
  }
}

var $ = function(query) {
  return document.querySelector(query);
}
