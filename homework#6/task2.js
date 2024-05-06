//Create a function called highlightKeywords that acts as a tagged template.
// The function should take a template string and an array of keywords.
// It should highlight each occurrence of a keyword in the template by wrapping it
// in a <span> element with a specific CSS class. Use template literals and string manipulation to achieve this.
// const keywords = ["JavaScript", "template", "tagged"];
// const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";
//
// const highlighted = highlightKeywords(template, keywords);
//
// console.log(highlighted);
// // Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom
// <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

class solution {

    static highlightKeywords(template, keywords) {
        return template.replace(/\${(\d)}/g, (_, index) => {
            // I don't know if usage of regex is allowed, but I used it to replace the placeholders with the keywords
            const keyword = keywords[index];
            return `<span class='highlight'>${keyword}</span>`;
        });
    }

}
const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

const highlighted = solution.highlightKeywords(template, keywords);
console.log(highlighted);

module.exports = solution;