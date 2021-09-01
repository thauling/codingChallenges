// DNA Pairing
let basepairer = new Map();
basepairer.set("A", "T");
basepairer.set("T", "A");
basepairer.set("G", "C");
basepairer.set("C", "G");

//let mybase = basepairer.get("A");
//console.log(mybase);

// for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
const pairElement = function (str) {
						const Arr = str.split("");
						const cArr = [];
						for(let i = 0; i < str.length; i++){
						let complBase = basepairer.get(str.charAt(i));
						//console.log(complBase);
						cArr.push([str.charAt(i), complBase]);
						};  
						return cArr;
					};

console.log(pairElement("GATC"));
