const quiz_data = {
	results: [
		{
			"quiz_id": 1,
			"quiz_data_results": [
				{
					"data": {
							 "id" : 1,
								"question_type" : "Multiple Choice",
								"question" : "What does HTML stand for?",
								"answer_options" : ["Hyperfuel Text Model Lingo","Hyper Text Markup Language", "Hyper Text Modular Language","Hyper Text Mode Language"],
								"correct_answer": 1,
								"explanation:": "HTML stands for Hyper Text Markup Language."
					},
					"meta" : {
								 "next_question": 2
					}
	      },

	 			{
					"data": {
								"id":2,
								"question_type": "Fill In",
								"question": "What is the correct HTML element for the largest heading?",
								"correct_answer": "<h1>",
								"explanation:": "The <h1> tag is the first header tag visible on a page and is usually used for the title of a page or post, hence it having the largest size of all headings."
					},
					"meta" : {
								 "next_question": 3
					}
	 			},

	 			{
					"data": {
								"id":3,
								"question_type": "True False",
								"question": "The correct HTML element for inserting a line break is <br>.",
								"answer_options": ["True", "False"],
								"correct_answer": 0,
								"explanation:": "The <br> element will insert a single line break."
					},
					"meta" : {
								 "next_question": 4
					}
	 			},

	 			{
					"data": {
								"id":4,
								"question_type": "Multiple Choice",
								"question": "Which HTML tag will create an ordered list, where each list item is numbered?",
								"answer_options": ["ul", "ol", "bl", "nl"],
								"correct_answer": 1,
								"explanation:": "An ordered list will start with the <ol> tag, where each list item will have a number."
					},
					"meta" : {
								 "next_question": 5
					}
	 			},

	 			{
					"data": {
								"id":5,
								"question_type": "Multiple Choice",
								"question": "Which HTML tag will create an unordered list, where each list item has a bullet point?",
								"answer_options": ["ul", "ol", "bl", "nl"],
								"correct_answer": 0,
								"explanation:": "An unordered list starts with the <ul> tag, where each list item will have a bullet point in front of it."
					},
					"meta" : {
								 "next_question": 6
					}
	 			},

	 			{
					"data": {
								"id":6,
								"question_type": "True False",
								"question": "The <p> element defines the document body.",
								"answer_options": ["True", "False"],
								"correct_answer": 1,
								"explanation:": "The <body> element defines the document body."
					},
					"meta" : {
								 "next_question": 7
					}
	 			},

	 			{
					"data": {
								"id":7,
								"question_type": "True False",
								"question": "The <p> element defines a paragraph.",
								"answer_options": ["True", "False"],
								"correct_answer": 0,
								"explanation:": "The <p> element defines a paragraph."
					},
					"meta" : {
								 "next_question": 8
					}
			 },

			 {
					"data": {
								"id":8,
								"question_type": "Multiple Choice",
								"question": "What HTML tag defines a hyperlink and allows you to create links in your page?",
								"answer_options": ["anchor tag", "input tag", "hyperlink tag", "link tag"],
								"correct_answer": 0,
								"explanation:": "Anchor tags define a hyperlink and allow you to create a link within your webpage."
					},
					"meta" : {
								 "next_question": 9
					}
			 },

			 {
					"data": {
								"id":9,
								"question_type": "Fill In",
								"question": "____ are used at the beginning and end of an element.",
								"correct_answer": "Tags",
								"explanation:": "HTML elements are represented by tags which are given to elements at their beginning and end."
					},
					"meta" : {
								 "next_question": 10
					}
			 },

			 {
					"data": {
								"id":10,
								"question_type": "Fill In",
								"question": "____ are given to elements within a tag for the purpose of defining a property.",
								"correct_answer": "Attributes",
								"explanation:": "Attributes are assigned to elements to provide additional information about an element."
					},
					"meta" : {
								 "next_question": 11
					}
			 },

			 {
					"data": {
								"id":11,
								"question_type": "True False",
								"question": "Whatever is in between the <html> tags is the content of a web page.",
								"answer_options": ["True", "False"],
								"correct_answer": 0,
								"explanation:": "The <html> tag tells the browser that this is an HTML document, therefore anything in between the tags is considered the content of a web page."
					},
					"meta" : {
								 "next_question": 12
					}
			 },

			 {
					"data": {
								"id":12,
								"question_type": "True False",
								"question": "An <iframe> is used to display a web page within a web page.",
								"answer_options": ["True", "False"],
								"correct_answer": 0,
								"explanation:": "The <iframe> tag allows for the display of a web page within a web page."
					},
					"meta" : {
								 "next_question": 13
					}
			 },

			 {
					"data": {
								"id":13,
								"question_type": "Multiple Choice",
								"question": "What tag defines a division or section in an HTML document?",
								"answer_options": ["<div>", "<br>", "<sec>", "<sep>"],
								"correct_answer": 0,
								"explanation:": "The <div> tag defines a division in an HTML document."
					},
					"meta" : {
								 "next_question": 14
					}
			 },

			 {
					"data": {
								"id":14,
								"question_type": "Multiple Choice",
								"question": "Which tag  defines a standard cell in an HTML table?",
								"answer_options": ["<tr>", "<td>", "<th>", "<tc>"],
								"correct_answer": 1,
								"explanation:": "The <td> tag stands for table data and corresponds to a single cell in a HTML table."
					},
					"meta" : {
								 "next_question": 15
					}
			 },

			 {
					"data": {
								"id":15,
								"question_type": "Multiple Choice",
								"question": "Which HTML attribute specifies an alternate text for an image, if the image can’t be displayed?",
								"answer_options": ["src", "img", "alt", "null"],
								"correct_answer": 2,
								"explanation:": "The alt attribute specifies an alternate text for an image, if the image cannot be displayed."
					},
					"meta" : {
								 "next_question": 16
					}
			 },

			 {
					"data": {
								"id":16,
								"question_type": "True False",
								"question": "The <b> tag specifies bold text.",
								"answer_options": ["True", "False"],
								"correct_answer": 0,
								"explanation:": "The <b> tag will make text bold when used."
					},
					"meta" : {
								 "next_question": 17
					}
			 },

			 {
					"data": {
								"id":17,
								"question_type": "Multiple Choice",
								"question": "The Hex color code #000000 corresponds to which color?",
								"answer_options": ["white", "black", "grey", "green"],
								"correct_answer": 1,
								"explanation:": "The Hex color code #000000 corresponds to the color black."
					},
					"meta" : {
								 "next_question": 18
					}
			 },

			 {
					"data": {
								"id":18,
								"question_type": "Multiple Choice",
								"question": "The Hex color code #FFFFFF corresponds to which color?",
								"answer_options": ["white", "black", "grey", "green"],
								"correct_answer": 0,
								"explanation:": "The Hex color code #FFFFFF corresponds to the color white."
					},
					"meta" : {
								 "next_question": 19
					}
			 },

			 {
					"data": {
								"id":19,
								"question_type": "Fill In",
								"question": "The ____ tag is used to group inline-elements in a document.",
								"correct_answer": "<span>",
								"explanation:": "The <span> tag will group together inline-elements in a document."
					},
					"meta" : {
								 "next_question": 20
					}
			 },

			 {
					"data": {
								"id":20,
								"question_type": "True False",
								"question": "The <link> tag defines a set of navigation links.",
								"answer_options": ["True", "False"],
								"correct_answer": 1,
								"explanation:": "The <nav> tag defines a set of navigation links."
					},
					"meta" : {
								 "next_question": -1
					}
	      }
			]
		},
		{
			"quiz_id": 2,
			"quiz_data_results": [
				{

									"data": {
											"id" : 100,
											 "question_type" : "Multiple Choice",
											 "question" : "What is the correct file extension for Python files?",
											 "answer_options" : [".pyth",".pt", ".py",".pth"],
											 "correct_answer": 2,
											 "explanation:": "The correct file extension for a Python file is .py."
								 },
								 "meta" : {
												"next_question": 101
								 }
					},

					{
								 "data": {
											 "id":101,
											 "question_type": "Multiple Choice",
											 "question": "What is the output of the following code?  print(2, 4, 6, 8, sep= ‘|’)?",
												"answer_options": ["2, 4, 6, 8", "(2|4|6|8 )", "2|4|6|8", "2 4 6 8"],
											 "correct_answer": 2,
											 "explanation:": "The code will print the integers separated with the | symbol."
								 },
								 "meta" : {
												"next_question": 102
								 }
					},

					{
								 "data": {
											 "id":102,
											 "question_type": "True False",
											 "question": "input() is used to take input from the user in Python.",
											 "answer_options": ["True", "False"],
											 "correct_answer": 0,
											 "explanation:": "The input() function allows user input."
								 },
								 "meta" : {
												"next_question": 103
								 }
					},

					{
								 "data": {
											 "id":103,
											 "question_type": "Fill In",
											 "question": "What function can you use to display a string in Python?",
											 "correct_answer": "print",
											 "explanation:": "The print function allows you to display strings in Python."
								 },
								 "meta" : {
												"next_question":104
								 }
					},

					{
								 "data": {
											 "id":104,
											 "question_type": "Multiple Choice",
											 "question": "What is the output of the following code?  numbers = [1, 3, 5] print(numbers)?",
											 "answer_options": ["1, 3, 5", "[1 3 5]", "1 3 5", "[1, 3, 5]"],
											 "correct_answer": 3,
											 "explanation:": "The output of the code would be [1, 3, 5]."
								 },
								 "meta" : {
												"next_question": 105
								 }
					},

					{
								 "data": {
											 "id":105,
											 "question_type": "True False",
											 "question": "A statement using the and operator results true if and only if the first operand is true.",
											 "answer_options": ["True", "False"],
											 "correct_answer": 1,
											 "explanation:": "A statement using the and operator results true if and only if the both operands are true."
								 },
								 "meta" : {
												"next_question": 106
								 }
					},

					{
								 "data": {
											 "id":106,
												"question_type": "Multiple Choice",
											 "question": " What symbol can you use to comment out a line of code?",
											 "answer_options": ["//", "<!----->", "#", "*"],
											 "correct_answer": 2,
											 "explanation:": "The # symbol is used in Python to comment out a line of code."
								 },
								 "meta" : {
												"next_question": 107
								 }
					},

					{
								 "data": {
											 "id":107,
											 "question_type": "Multiple Choice",
											 "question": "What line of code below creates a variable “x” equal to 0?",
											 "answer_options": ["var x= 0", "x=0", "variable x = 0", "int x= 0"],
											 "correct_answer": 1,
											 "explanation:": "In Python, you do not need to declare variable types before using them. Therefore according to Python syntax, x=0 is correct."
								 },
								 "meta" : {
												"next_question": 108
								 }
					},

					{
								 "data": {
											 "id":108,
												"question_type": "Multiple Choice",
											 "question": "What line of code below represents the correct way to create a function in Python?",
											 "answer_options": ["public static myFunction{", "void my_function():", "def myFunction():", "create myFunction():"],
											 "correct_answer": 2,
											 "explanation:": "In Python functions are defined using the def keyword, as shown in option c."
								 },
								 "meta" : {
												"next_question": 109
								 }
					},

					{
								 "data": {
											 "id":109,
												"question_type": "True False",
												"question": "Python cannot work on different platforms such as Windows or Mac.",
												"answer_options": ["True", "False"],
												"correct_answer": 1,
												"explanation:": "Python can work on different platforms such as Windows, Mac, or Linux."
								 },
								 "meta" : {
												"next_question": 110
								 }
					},

					{
								 "data": {
											 "id":110,
												"question_type": "Fill In",
											 "question": "Python uses __________ to indicate a block of code.",
											 "correct_answer": "indentation",
											 "explanation:": "In Python, indentation is very important and will indicate the start of a block of code."
								 },
								 "meta" : {
												"next_question": 111
								 }
					},

					{
								 "data": {
											 "id":111,
												"question_type": "Multiple Choice",
											 "question": "A ___________ is an unordered, changeable, and indexed collection.",
											 "answer_options": ["dictionary", "tuple", "list", "array"],
											 "correct_answer": 0,
											 "explanation:": "A dictionary is a collection which is ordered, changeable, and indexed."
								 },
								 "meta" : {
												"next_question": 112
								 }
					},

					{
								 "data": {
											 "id":112,
												"question_type": "True False",
												"question": "In Python the else if keyword is Python's way of saying that if the previous conditions were not true, then try this condition.",
												"answer_options": ["True", "False"],
												"correct_answer": 1,
												"explanation:": "In Python the elif keyword is Python's way of saying that if the previous conditions were not true, then try this condition."
								 },
								 "meta" : {
												"next_question": 113
								 }
					},

					{
								 "data": {
											 "id":113,
												"question_type": "True False",
												"question": "The size() method will return the length of an array.",
												"answer_options": ["True", "False"],
												"correct_answer": 1,
												"explanation:": "The len() method will return the length of an array."
								 },
								 "meta" : {
												"next_question": 114
								 }
					},

					{
								 "data": {
											 "id":114,
												"question_type": "True False",
												"question": "In Python, a list is written with curly brackets {}.",
												"answer_options": ["True", "False"],
												"correct_answer": 1,
												"explanation:": "In Python, a list is written with square brackets []."
								 },
								 "meta" : {
												"next_question": 115
								 }
					},

					{
								 "data": {
											 "id":115,
												"question": "You can access an item in a list by referring to its _____ number.",
											 "answer_options": ["position", "specified", "index", "list number"],
											 "correct_answer": 2,
											 "explanation:": "Every item has an index number, which you can use to access it."
								 },
								 "meta" : {
												"next_question": 116
								 }
					},

					{
								 "data": {
											 "id":116,
											 "question_type": "Multiple Choice",
												"question_type": "True False",
											 "question": "In Python, you can access an item in a set through its index.",
											 "answer_options": ["True", "False"],
											 "correct_answer": 1,
											 "explanation:": "In Python sets are unordered and unindexed so you must loop through the set and use the in keyword to see if a specified value is present."
								 },
								 "meta" : {
												"next_question": 117
								 }
					},

					{
								 "data": {
											 "id":117,
											 "question_type": "Multiple Choice",
											 "question": "What is the symbol for the modulus operator?",
											 "answer_options": ["/", "%", "|", "!=="],
											 "correct_answer": 2,
											 "explanation:": "The modulus operator is represented by the % symbol."
								 },
								 "meta" : {
												"next_question": 118
								 }
					},

					{
								 "data": {
											 "id":118,
												"question_type": "True False",
												"question": "In Python, strings can only be declared with single quotes ‘’.",
												"answer_options": ["True", "False"],
												"correct_answer": 1,
												"explanation:": "In Python, strings can be declared with single or double quotes."
								 },
								 "meta" : {
												"next_question": 119
								 }
					},

					{
								 "data": {
											 "id":119,
											 "question_type": "True False",
											 "question": "Python does not allow function recursion, meaning a function cannot call itself.",
											 "answer_options": ["True", "False"],
											 "correct_answer": 1,
											 "explanation:": "In Python functions can call themselves, making them recursive."
								 },
								 "meta" : {
												"next_question": -2
								 }
					}
				//}
			]
		}
	]
}

module.exports.quiz_data = quiz_data;
