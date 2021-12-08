/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

		{��.�l-�[/0���l��`G�{ڙ(��A,��'�p����FbA��o��@I�0 δx���x���OMn�]+[)�N����������.���^n04ƀڟjp�'�3���o�؝�Y��S𲗞�x��Wv^@Wџk����y��o����U$1��K6�y�x���s��6k�Q�sDk����y��d�xi{f�e�%��Ѫ�{�|� ��?�e��8�P��Fr���G}�s�H�@#L�4b!B�h.��@�$,��"���}�f�oD���k��G��yOm�!�h�O�nO��!`�C�Y�K7�3���X9]���]=_뼎ݙd���-���,��Ϻb��$b�����-U�ݝ�__S�5�ëW#�8�l������9��'�L=Z��)�v��Q���ջ�����*��,+����Z���&Ar��\�D�t���.�	�S�n��+GQ}Jf�k^=�����eU�u��8����OH�f��ք�z5|M�Y�?��4��lN�o��m�����L\�W��C<�ᝇ*��v����a*������l�e��kV�~��E?�BCb�q�XF
_��%�7GV;F�Ǣz�w�8�Q5���f�:�=�$%E`|�CAxd�v�{�:WO�ݤ��^��RK���ދu�L%޷�B��JH�����>���i`r=T#��LNC�v�����f��2<Ch�tC�cX�7��� 9�{sM�Q���-4�� �.,n��Š�Gǁа�'	V�A��$��x�?��o<�4\��>I��� ?f�5x@���XC��kS�wgn'<���0����ͦLuj����C�����<:w��Xń-��S���&�_mnhL�0�b�\��Vݿ�{9�E�<�u]1,$�1XF�4�����������,%/wQ �����S�y����S�-�T�(y5��)�CC�!ZݩN�LK�],Gˡj��L��̵����iC5�-G�ƎQ19�xﵻ��� 1Hpњ!�`75h�?���b�b����3	���:i��E�PUM�|vD?�t���4�}\�Y��5st9�@o�\$�����AWL��ŔlEO� +[�-�y�w�U�q??�F-+��LU_���
�:]�Wb�M��g�/� ��k�8�&9%c%�dO���/�H�B��F?�Ǒ���D
d-V��2km��R�m���t?%;����^��b�����B���߸��6�Og�w$���icl=jc;㨘�?apb|�q���^T�q+!�@�z�PF�A�3�V�\8YP�W5�jX�E1�^���sQ�S͂ǆn�f�?�6�i�����q���� '���[��>�#7j���v9ӱ�%$꺆���]$O5�uY�!�?��3����Kt*$H4:�����܈H�����\�Stwb1S̖>�wp�m��V���Gas=�Z�v<�3,^c�6w�l��A3�d��q���>�fE���`�`���r�kkrw��:���5V��S�B�-������LpT=*�+�r���:������Y�b�ٻ�^������f����<�:�:�^{[��0�H��~�ׄ>���C���p��JL���:��,06�P��6�3�d'�1�%�Hc�|=(��FАh�ÓrS�X��wt"e��UCU���!�z�&�\/��w^{��ur�L�(�EwGp��Y�ٶɝ�e����z�`32'PO ���V3����vm�9��Mݔ��7�-m{W���\k �O��m�D�`����	>o�J��
C�Ԡ�9�H�.º,�X#˔`�XZ�V*`���g1'܈1u�J�����H��M1��K�&p䨩
m��6�ޡ��Y�E�	�	\~&���%��&��&�S��>Fs��:g��p��)��h%�5HA��6�B���I����Yd˙�V1oX�K6���|+��������$h.�VZV�^�'��N
u���Y�H��F��Nҗ�Z�Uuޔ��Ĝ�l��zɮ#`��F7�t�J���g������im�_�Y���A�g�=��غ��[���N�`G xQ/�S���޶��w-ֈ�d��/�6~�~\���H�k�E��#%\W�(�^r��l%W}(�i��Q�.�&��H{v�����6p޵i5+0bl�,Rk��V/��{�3G8�Jn�.'*�Y��1��6�W:��m�Yvw�o�������V~�k�d�7B��k���s�o��g?B8E���<�Ս�����G��y��9�N�u�A�&է��,�󈫁&��5�=�ƤNk����tl2	�,T�5(�`��j�E(�O�꩜lF��0Ɓ�:#5�����Շ��U<w'ե=;j֌��M�BCՙE�LJa`�3W��tY����Ņ�>�t�P�oܙ#OY��I�S���=���Ϸ�|��5�6�1�=I`�H���qIc��F������l�5��v�����x�L9�H\��^��ø\+x�?���[mKk��7��m�^#(�*�w�y�:���;I'6]��\�j��y�Z�y{AYy�G��|�����<z���{s�>6�_������{�<q���̝�͓�i>+�v�9���4��Q��Ml��N�)g���a�F�8,8����	�3���ڗ؟����p�\���ͼ�[����u�1!X׹��t�T�j���A��s����҈-����7��ξ:�=y�A��[�A���^]7�~y{�Μ��僧�nԬ�^�Z���yR���4ϼ��S7h�:ͳ���]l^��2|���d�7���׉�����V��&���y�Zܢ�bӤn��u����ڙ��_ha��u�O�
���t������
�@H���m>�'0�3�T/�K�}�G�Xנ"��Z�GT/�
Ƃ?�/x��D-�"xs�֍Uc�@�ư6�����1��+x��h#�4�B��g�5D�0h���!�*&*�N��H=Z	�(�q�T�Lu�i����%`_B�L9�˶�Y&@h�0��Y���X����Ml��T�e����葞K�pቆs�2h�#��gV@���>�,�T1\L��T7ֈ=��U"�h9\U���/��*D)Y��y�i���0��L�����'��4V/���OR���/`���3�Oc�^�p�\��^$k��lS�p�e���[�qD+V2���a��1>q�c�&�p� `����M^��g\<�R�QZ���X�g���3�ƯO�97f�\۳[���㻿���_�3�U�Q>�<�P4��Ѯ�iD�����Mm-a��v�L:5�/��+��m��\��d���10��7��o����ϋ�T�/OA�Xb�X9�Mx�&<�4�r���K;�����oH[3����{�jR|��q%&P`4��N�l��� ֠5�]���Q������K�<�)���^�)G�x])XM������U#�o�0K�A���9��)�Z�j�'xK��3w�{��ϻ��h���n�����O���'[V���� V���	f��x�9n$J�z���f`b7���ַ�R>uL�P�ƿ<7Hkٶ�cj:>ȅ�P1Z�6��c.�N"d�i������כ��G�� &��%d�3y:7H�N����(�Ybrklkfclm�y7���E0c��8؍��v�6��c$�Q�p��{�~.��{�:�2�� -�Z0�"�}'�t9!P�A�I	�����!'N�g>tic����I؋j�iIq�xD����~��P�0U���ב>?��H��,q�Ϯ��'���'�2Y��*YI��S���ݤ�
���)����E��p��E�7��s����ؾgo�$��j���9K�Pٛ7{�.��@��԰aЇKǻ��O�_�y����#�����ɂq�!�Z�r�gr����՝��9,��J7�>�ld?m�F�G��5����kDI�N�^#�����)�s��m���H;�ż��gZųR1�N����k��g[5y�],��:i����?]0yG{Od�����-'m87]�Y&�H��3u�=����'����i�,�B�.�u�;Hշ'mO㘱���%���=]ښa�w8ˊ�G�{�;��z�M�D����#�[�.o�&��oLo���������Ƽ}�N{�\z�U Q��RL���V���>��.�������7�I,<��x8c5ڛ�8�%�Jv͗�Wc�p�ԋ�W��� +�e#K��b�O���.n���ă��Z��r��ˣ��p��6��,�7&֦����1y��������z��@9��-����]�6��s�6��0��VwǷ'7�6�v&wae�NlϬMЬ�#$څ�:q�o��� |���w��]����U#�X%�N�3nu��g8��Ȓ�n�~�O����[7���2]� �3Jr�F�3{�L[�_��5Z"k4����v���Yj�"F��]�D�?Ԡq����owZ��uM^���]��^���3,��AC��J�c��A�A ���3���ݯA�je�6_~ ��M�V���iV�H�U%�FШ��Ud�/&1<�IV��l�hYǫ�o���h'	��c�P�j��X=�b�1)��b����k�~��<������G�hnkr}#����R1��Z���5����巎0�e�l�<���l?�a��U7�=u�~��g�|��z�m�xK/���C)��R��'�	C$����g�L�}f	���ѻ�b��p��'�F������p[K���L`H5��q�I9�[�r�t�G�ه�.UC [�9����n�B��^��������_i���G@f��I(��Y�d�'�@��슦�c<�3����ys�609MN���5J�a�ՂXs�,�?�T�J��{��W��{5�`��3RK�"����4h�����cQ�M�KG;�s���lƣ�ꂌǐ����}.��QJ���z�Z�W�b�H'�Ow>�;\TV���ё�Q#k28K���U�ՠ@5E��_V9ȏ��Q��"U��Qrmw�NKz~�]�W�d?>���m�;�v�1KW&�F�um<��ëF]��UR�����J����Z���L[7�0c�'5v����mJ���A̓�p9�qH��̰��:����HǕ�ō1��;A>d~Vc���G���1<��w�\�	z�Js��R"֮|�i�sm�vnL� �9�|���cZŘ�-�L����<�4���%���)�5�����Bڜښ���=���i��P��m�ʅ�c�I'UJ���d	�}D��Pr�T�!��J�¼�i���1*��샤B֠��\G�&9^�$�6&���ұ��7:���#bf�����e���>_��.��C����������Z�V����������.���;�F�Yu5$�៙��Cńu.�N={��������n�_�`��~� �*2,�
��Z܅zH���vx�m�Ye�_Ҡ1�Ũ0p��C1,��ɴ�m�x�rZ�
*[�_6��.�D)V��P=�5µ�A������D�F�)Pe�#�K�]&Y}
��0B���,
�W5h���C㲚��k;�Nz�
(>{3;H�0힨�4��qq��F���:9o�ck�J�r�
��A����a]��q�+�N߈T�ޔ;߶����!�D/�oh����G7��t`���}��WϿPG�s������&�	.Z�u�����]$�Wb�w ���d���yL�0{���2�����~�X��)��SC�y���U�PM�;��<� ���\ˬ�}&9�K����]����ٳ�6CE-!��G�@���������@9u�?�4y�n�����7�����Y]I]��7b_���T�N�g��
�FqV�S�T ���,��3#h8A�8�|��u��q�r�i�0���o�a���A�K�3�j�R�f;o�b�d��qQ_������I�����p�`��i,u-F����~I�9Y=��"(�9��f�Z�y���G$������>���QH��<w �.�͋������s�����ëaK�,��p�ׅ�w����_<|��t��.���+7ފ���F���mk��V���城���/U׹-|�n;�L9ڠ<h�Y�|��qf��MpQ��\﫿�AdV.�g8�ݞ�W���O�O箰01���Z>ћ�v/�J�N������(�s��	>$2�����G����p��qҬ�l��O�
�F�j��:h�8�ydu�c�޽�CŦؗL>3�����zt�Ք�TG���0ޡ�.X=��<X�`Kź�X��V�C���S�rf�ѱyr�L%�cXC� vT�W#�(�E��V�߆I蠔��L1*1^s�PA|գ�A�)��Sh����3�H k�b�:)��I"����~u��I)��g�H6�%��VZ�T���g����ǋ��W�a�)q�*��+bPw�7�0R�h��ETY��0Þ8\�L�	W�Vv�6��gw�tx�Á%��YS`�p�`~�pnoy��w^�˃�K����΍�8\��4��|�~���仙����C��˵�m��LY2T""�˷��D)>�6�/0wR�'�I�ɾ�6�u�]ҕ�=!\7�U�S�jЍ�?�6OiD��Ǜ���?����ؗH	�	0"�0?���e����|`����w����������
���S�ԭsf��[��9���ىp��Զ���p�7?y�����n�g�F�9�΃���&�5u��hW�,��Y3C�y�g�`7�aCʤ�#E�e�P���:IYu�<�Ք��$X���Y���`����h)�H��/�l�Dq�"m^s��O+7U�u�m�ɦ��5h�Ƭ���#c��R�`5W�6���?�5��]��j�qV��=[%(UD�j���;3;������k>x�����1��LP�@�$��A��# �)���Ǭ�f�����̱j���9��NɪA�A�&�c!�"˴DE7��=*4�]��Bg�����!�t-1\�F��E���U���1/h<���@����xgJ���۳�Żc|Z̴��q�������m�� ��Zx�;vy/�s���h� ֻ����b��jK�va���W���ܿڸ.��b��?}��w����p��Rwҁ���̻���;������*[x���h!��(��Դ��~�\KK͹�	�5���1�t)R&Pg�,�t/	[������yĩ���a�7OHz^�v��\5X��㍰+1�L?�1˦/���|���:q��S=�b	��Y��e��L@_Lv���&�?|��@L4��#	^ڜZ�9��[�y�Vw&7&6f�'�f`+�ck�g~��IB$T`%<'�S�:�P�ssvm!j�L��ܘB �#]�r�Yƌ���M��܈�fw�-n�y{+��)X�Q�0�cmFM��t�� �3݂>1 �@_���M�����,:��a?���|�x��I��&@py������s<w�jWl��hacJ�[����1�i>�I��e}#X�`Ֆ����2NPP"�q�}��/�\,��t�:�s���vғl�ڪOR��Ϝ��V�JB�W�z��0�:���բ�^��հ�CLf�)��dD��/g*�R��k�y��lU/�4fGШ&x�'�d6�CNy̝pE�F�	1�}#���O^}��37|�_xf��z�������-����u�����*ַ�_އO��A���O�N��-g��#�\J*F/�x��(���2�"%��+�b�.�P�j�zԱp�'�IT)*��ki�{vYu��h������Q�����x1\�S�YPb��	֠1�V���0��N��D�a)Q18�*�^��gRO�4��b�q2E��n�z�Ab����e���*JA|��	�b�� )�'��b�F��-Kۨ���%F� ����e�7�	�@������D�'�����h��,�?6j�*@��~�"]b�W��'��k�ⓀJ*c;���]������,��gn}T1:�F�I�X*\ā��^��q��#��	�Ls��0)&?�h�HǊ���b�"|&�#Tb?�FH%�z���X7>��[Ґ���2�ƾl;	��s��2pX�#<6�{��X��h�����]}o�쌾{���S�j#��T�����8�K�@�n�}��8���T��cB�q�m���+�;���q�4޿���ް�����s�H^]��^ܥ��r��f\�G\����g۹��#b�?sbQ����g�\�=�S�Ԇ�-���ίG�uN�Ju��_L�S�-8"/�>]7<�i�Xk��K����_��u�?~�}k��;'/m?�E��Q���;#Ŗ/{o��y����G���_�W�tN����:v�����L�x�}��>���튳��o-�|c���K��{��5��:�t��w����/�-�����/����4��C��{ޗ��R��Ky�����^�E7��h#�+�vF�6m����qFqA�\cA.)iO��z�o��c��z��tĵ=4q�4�oS!aL���k�]���3��R�sL��<ŵ
�JB"J/���k���s�`%�5um]c+W#�r��6��N�-�lS�8���aV��i0���õH#�$������V�m��t���(GR4�T1�q怞�z��������t+��þHc���G�?^��»Ͻ����Kzo���[�}�bt����������Ol=�N���&k`'����0x���擷'�X���۳�Kw_:�u���B�_��7y�Ń�����.R6yn��}�Ks���������'_{v}^x���!���X��eX� �ot���)��e��+q��P���_�=|�p~�`!�˫�Ͻ����Ͷg�g����6�����'��o�M��c�䃗�Y>Y�_.&����w�O_��,�Xx��;�^�~}z����|Ou^���|�����k7^�}�GWԋ�}�ҝ�J�c�e4�>����7�>W[�'�Û|�c���Ճ�^}�oo����O�}��4"����\{��Å������1or�;+,��t
}c��;�p�=�7޺y��7nn<���[O�&=���&_��7y����H5�sr�e��/�g��^�������R��1o��������T+��bӍ��z.ʽ���������L��h>��7��ǝ��wn�={�g�����~��RB���}���Ӆ���Tg����'�'������\�*?���7�kp����ӗ�|�������3*���j��?�χY��jz����h/;H�t%�k��ɶ�r�4�#�P��#����c�0��jO��Ҵ)j��FxDC��7y��t7��c.�N�z�eu[E�Ou݈~�h6&E\zA!*��N����
�B7*��8�7i��ұ��_�}��n	AQW\�_�Z.R"�������Ͼ�����~�c��`��g���t3�QuX.�/��j�5�9�ꓛϼ6������&'/�{����M����+�?w�E����?������So�؞^{p�O?�Mޟ[����:����76f:f��6w�z4������ܻ6�?~̛�y����^>�$�sF��?x�������}s���l`�-����79Z��������g_z��w��|�ݙ�魥wn�z��z���q������;Xi'~q�4k��Y{j�������ӻ�ӷ<�M�>X�`��91�SX���W������y��7f��s򭏻O�N�ν��+GaNVvoz�����;�w��o�:����)�қx���7�{���_y�)z��7�qÛ8zc�����[>�ڣg�r�o��<�k�t1�`��f��0N��s����^H�c,-����>��%����U��3M��rҵ,��^��w���$&6.P�h9R�C.��^aK/\��s�g�kX��~�oթ�=�hvk� -��ܜ�;�MV�#�e�b��|���g��� ����*�-�'94��	B�����z����;0?�-�\!�ps������^_6on�ۅ%h�/A]7oV��%q+d˿}u��ݶ֨�7'?x�Ǟ=y"�[��}Gu�~���ZBY�{���oB.]���F��7����e}k\�6����`�ܛ���������i�'σM��ɭ�?�4'W�
���������=z�zf�]��.��O�Y^��jd��ޭ�N�O�)�����֓�/�<9<(LB��{qǃ9�� �_�]�5b��2)ؼ�n��F�ŗ��iO���ϲ��_����U���1���WC-c?�W#�N�3��<~hܻ�N���<���f�W0<�4xƥ��"o>#=���w~x��fc���� W�kd1���k�Ą�GK�G4v����3�g�P�S��K/�3'��ս����l_px�1�íq��lZ<Z4��OWv��D�'^Ǔ`	�x�-3��l�~Tc��5~$=F����8��ؾ���Qh���qȪ��'F�.��,R	��EF2���P5�Y�-K�.�l������LC'B�g�!.
*@�i�1=�V�Y����BS^ƛ�[�X�(����MK�c�ޥd������d3�v��F�d�ܘ!�ze����R��ߍЊk:��,ʍ��TE�5C�P�}��f����3�1NS/�%��C�x	�t�X)�I��_1�"�'[�V�c��ۑ�YqHzV�Ѽ��:����G<K5T	�R�Hc`��+�J��V,��/�4�����RP�Vb�N�16�I�M���/��*�.����E��R�=F?��U}U_�(�fr�mٚ�3��_ՠ�G�s�N�c��N����bt�4��]ף�dI����R�e��Ϫ��(�\���%�L)^:g	�q!���\ SI����p���3���UU���F�m%VL��p����2pg�,�՜7��w���'"ìޫ�$G�AgD"k?#g��Z�	z�=w�ӎ'�+��vfv���n�鮺��<�ucbsR�2���7?yu�ﰿZ(��/�9R"+���o&�l������P+_�9��h�[�(���b��v8�������5Ն,�ˑ]���
;?�Ou��������޸|8gSlK�K�т�g[���ڼŃ�������q��x �ϯ��&�ٝ����É�e��d�Ҟw�:��|4�z�r�x�Q��Ǹ�����o�k�gM�p����}ֶ�����m�������3��5���#�u͝X��A�grF�)ꋡ���4�`�5�ꉁ���)��Q;��b�h��Ѭ!m>�!M���n0�*&`���ؚiq�p�t4�q����&�Y>^�_=�WG�5Fi�n��9�RpgZ��i��g�Y�cU��x�����~��)��;��^�xRr�6����5n|�����r�X/�%��a�t�rYc�ض����I�Ɉcz�u��lf�Mjq.Q��p19H����������>+�i�W	�E;�u��0��S�ϴt8��"�76�N�7�L��f6&������ɜ���^�o�(���F��xL�ٽ�7�m^Z ftc{�k���.�6��p�1os'�G+�b ��=�3���K�툴d�܁��#l�2NL������+��"��SkSG�ǫ����c����5��bS�����y5]��4f�8Q��%���]�.&J�b���Yۅ~�o���|V��|�S��uǁxv۽f� �RW�J�r����i���]�|�ɯ"?�0��`�tށ1��0�Xf���-y��1�`����v��x7N���j��G#B5��"�&&XE��%�>�~�c;+�@~j��[�A�+�\�Z�H*�%��Ν�&}�jB}���G�Q�DXz�Έk��X%�X��z|`���Ak��6s&�J놚�m�[�9�K�J��5�;�k<��I0��(�W�5d�Y�=�J��r�e�?m��z_��_�������8���$%���$!�L"|:Fs[㔴5Fbu$����������΄ε9s�x�x޲r�x�Vڢ���M�˯O�� 46������.� #�}dĻ?uu}��W�4���Tm�����@!'7&WO�z��ZG������%�i��v���[�G��~����gqs�⩙�Iʹ6��*������dW��"bt���Ӎh%̛���͗�1�����C��}��3��_mQ�h�� ĺ�>�����K������/�N�V���]ޱx��%ϼS[c��ڞb����9	����6�ָ�I�ؖDL�O�glOi��� �'�������ʦn�N�i���kg�����5�3�AqX�:�9�Lw�m�w�UC�C.�k�r�KԱ싞�� (�fP	��\��V�g5h�8�`�:cݴ��1��E=��d���ml'ώ��ڝ�0e]9"�v���|�ȈVP��d/����؝�j����;g��Ҏ|{kO�́��0)&L���l�y�U ���E���N�4xQ��C�9���Ͳŝ�a���v_���غo���˟�Z�|>{u�����(~��aP���0��+\�*�2h�y'r��.G�@�q����;�/��M��ǰ9��V��+E���yY��J�b#���ys��w����o�Y�j�/yY��1	I4X۠���]�w���]� ��m�^����Ƙ\�����'�p-;�"D����y
�M`��i��ƮJ�����a�NЉ4K���5ڕ���&�����{G��hdݭ�7v߸�Pz��b����ks��2Q�Ԃb�����b��3�B-��ѹ�����L�޶*V%��~ڼ񩫍�!<�;�QY�8Ɠ�3��Ϣ&uc5���b�n)����]�'�I��M�h�3X)��� S�a�ܮ]κ͞\��ؕB��3vm�T+x�Ŋ���Ϊv.�c)�ƌ������Xl�V�VI�PY��`�{@���lDҳXCJ�Vy[C��s�����@��k�=�m��ZA��`�U5���4�H�z4@,���qHv��[h����4${3� ��:Q��EF��r��ԩ�^�*��G(B�jqژdQ�|�5��+F���%�1����ZD+�g��F�S�B+�J��g~�{��r��hīz�A����p�E˜��.}-�bPqc5
��/n�G�TрQRu�Ĉ�"ր�w����Sr��U��J<`/7�&U$&,���(�E���S�i�ae��S�M���-��i��X`����mZ���6.3<!��X�H��r����+R��58�fX�0�W�>�Bx��ڞ0��5l`i��&v&�gN1�e��
�f��-j}5�lQ��S��щ���c��`�{���h�����_��#<�w&6��g6�(	�c��`R`,��B���3�a�7@a>�G��Õ��Ӆ�e0W����������q�U��#�l��� ��_x���PNRJ��?�;^�sp�b�=�N]=�~г�m�\���t~u��G�P�}���0�$灾H/��D�P�Q@�3���=b�%*$pѬL6
�� �O���vV�xr�x�Z�ʰt9�7vcN#�^�Rh�!0�TUuj�zԅYd%,K�F��S�M15�`��;j=���q牡ط�u�`Q���\-�J��>�n��:/s#��1�їo�&������z�%ܲ��~�kи����@��8|�����.���cbU܂�!z��iB]�4o�X��^�L:P�X%�jϒ�.������HW��e�6��|#�6��R�
j3xy��{Dk�`V�.��y�萭k��yl�������o�D	���F��ER�'v�@��#�8�t��	�؃p@M1��Z����*�rH��8�!
q!��O�q �<-�

�X=���|h��.����}u���Z�����Y:^8�C�����,�V���r(`�/�-8+p3cO���?����K}��՘�a�*)!1R�KTE_��9%Ydx��������wC���s��̝���O�swVV#�4q�+�;�T7��aR�9�07,�ςŶ�L6��ǄVD2������`>�`�*"?`^,����Հ�8&����*W��r�Мv��mkf[!�vQl�l%�7�5�U�����F�k�FpȎ)`}-�K�RMs?ٴ�9��r����!^�9�°!���g���Q�bx(혮x�ʸ�U�r�,�H%�,4�>�;s���1�LΒ-m��O�L���������$�J0f��Aڢ�hwz{S�1C��קP�@g���Ճ���ʭ���_V��ūA!�w�.��e�����6��:�����s�4��g��
)��70�a��!�:�D�o��֦a����)��ىe�ᳱ��=��{�3�i�p���v�3��Ü�����0�i�	���;5��e���Qu������*���|����iX�+j�:Db���8���9�X���w���N��*]�����?��kV0��Iu�\�!!Ggx��$[�j���s\f��I"=s����Vw����6��U�Sݲ�����*	�j�K����L%�M�-M{����㕪����S%��v�eS��h-�N�-�I6�ٳJ�5�~|޹;ڥ�"�B��3��ˈ�U�l�:ኪ��GXh�`#X�@#��43�� ٴ�t��Ұ�A��)w���J�*Q��.QV�*!;Z�~��:�4�%�dc+�7�-�hA�5!�FB0N�O���V�Y0�5\K�:��� I�t3Xr:���.G��:���E?t�BV�~}�N��Z�f�4v�.�*zW�����|�_��kGc=�|����:�N"1��tF��B��$ZM���s�0�,�Z�RjPP�>�A#l���ᆊ���A��EU�b��f���gdQ��F���ߎ���4��۟�l%Z�@L���������B+��vA�'�ƫv1�*��I�c��~vwf{ɱ;f��o\�󞸩���C��R��I��g�'a?�\�������&L5�'��@��~��@/IR���Z)gZ�v:`�D*dO���t
�[+����WY���t뜆�>�6Cs��̬MmL/�櫘z�z6��^��'���������ֱ�6(�Y�(�V�i�[�,FU��(W�l����K�Z�\��nf�&�.�<�Z�ci;��.p�G��n��8��-��0_`�[E���{����\��)�ϗ_����=���w:⼁�KѢ>`m��i�Q�+�2*HQ���T���}���'�z�㮐i�q�)Qb�j��:S�����U���˟�����J���m��+�:#�}�mDڛ��g罗H�\�c�qw�`�`Ղ�^ڹ9{� >�_ᎃM������@`�`HU#,!�۹N>`:�|&��W@�2]'�L��J6SE=�PL=Hw�������_��d~�棕��9��3���y��`�/�ş�Eg��.���Vz�JN=�6h��%T@#��]���x��z�����0Hao�,��<��|��"fFc�6� ׇ��&V�X��m�N��#�^�P5�!V�5�^� V�=`l�m�=��J۟Р1��	��4p����v�rM[�*��A����e�_8��ڥ��1�,}K?ߠˉ��J8{ �/t�X_�4��ٮ/��,�*.-�V|�*���v��� ��?d/U����SJ�3�d����6��i�����[���b�׍o.:\;��>Xf��3����=��}��k\����<��S��e�2w���`\:�*���5���/ɦG=�h`� q9���i�ѷ2�`MǓj���C�uE]�E���.���nz�^@#u�
? m������G�@*ɾy`�[|V������v�C�z�#�|�ǱӊZ�Y����7c(����������������X�0���P�_G���z���-
���iuM	���B,�@=0�2C[�FXL�A� Y�gÂV[A15s�h���W_qa�hd^��zv^��!K��~�CU�R�̾�I.^�7"�`��}����E��f�.F{`�9�*RZI"S	��U�ȧυD��KN㛢U!xz|C�*&�=�i�x�4�vv��U#<e0�D=�q���+��E���Ӵ�g�_=�F5��)�F��kr&*�*%��@����I��נqbڮX���Q6�sJ�[�[[�͋����5h�鹝�2T��t���<���y��,��ZO�i���[�D=Z�_�kg�WhD�4�T`_�.�%X�x�K�*2)&�(�V�����A��o;��2ȵsW���Dԩ���œ��%{
��1`�/ ���������h�>�b�׏8/�e1W��h%�ɖ��T#՘��'�N��}�k��Ús�upgX`�:6R�1g�*����_.���b���f;�V^v����ou��3��M4����K���S���a�D����4K�cg �߬A㾗���j��o$��rH ��g�8�)а�Xwi�����&�8uB��f[f�r&j:W����:��+oTU�a[�-�E�w@.�+	�k�@,��L*������%|��1ZN�gᢢ>��&&-n�\P�Iz��V#i�Uc=q�`�Ɗa�D�M�,��ς�;�f�?;��g��#9�b����C<U%yXQ��צ�*f�wi���k��Y6y�>c����]h�xZ��b��,����G=VS�zl��<���5�+G�8�H�{G�:�}�M5�R��&�<�ks��.������i����8�:�xǍ|;�r�s�T�ލ�F��I�P"������X(���� �&O�ۨ�r�o|M/���`~}v}�`����Ux-:��ͯǢ�x:=�9�>ip�QƂA#�O�Lo�պ�g��;���gU$�i�&�e��M`V����pwŤ��@S�dx)jI[�C0�c[3;�a�t�x�t�d�x�Ǒ��#�2Y���ET�P���t�h���QV5d�*'�ѥx�t�\a#\�F8#�D?6�ɝ�s�0P'B����_�[<�;Z8Y�;Cm[t(f��`7��N�`v&`�14'��~D�=�����*��������ފ��x��SK'0��	�x�x&Ǡ)<�-���!�]+���u3�>���oL팁]3��M���^{�x����`5�+�>�}�PlM�/�)��z�-��?�=�ݩ�3�O	��lNc��EDB	�
�o�tm�S������֛�>nM�Yҵ1�6��
����t��������<X\��0���{��~�_@_Zc\����(>Q&�w��?��<Α<�T�B�[ꫦ���������+B
)t�����2�J��ʔRR*Sʔ�9��X��,�b�ό�a1^�]��x�1�����X���XX�.,�@�{�RUVuFeMѳ�����R�~�����{����ΦKm]�h�3\�U8��	L~�
���c$���E�W	^��b]�fy��73�l#W��>+B���������n��<Fω�ʦl��$"��n��3C��.��S�e4<7P+9� ����bg��Ģ<<e���-�"*����g@��$H�BR�wB�����#����H��B���v=�zb]X'�� O�m7փ�ĺ�K@=���<�_��.�; ��
}��g��͜�[4�rwխt��׻}��]��K���r��y��+f�z�q�)���v����w����t�0���/�3��xS���Kr:M�z+����c�7�y��%zU�U�3'|�ԙ�~��S��{�bg.����§n}Tg����^�=�ڼh�'�L|�	]L���L�`5Y	�<x�:Ii,����{衍�-�%���U${����t�?\�g|ى�Y�ZPC^��nXT��N�*�6w�{�iD�=%��1x�$K4��;Ta�:�Z�I�� ��p�����L}/P/�ʐ�ͤ��}~� ���<��b�X�y��y�z������A�"�J�.�Ĉ&5�S��,8ēu��#��B����s�{��x���� ���S��*��LE���R��{U��.�B(ݫv�cͪv+���Xs��DM��_��E�u�i���Y�#�Hfy�hHmz�j�8��u��e�?w]6u�M�]O��?^��YXw.�]�+�Уn	}!��-�\�=���[�������4�����_�J���ƞ����~��-���]���>�M�=z8���\�Q�(8�B=�_�o�>��W�b̛"vl��Q�a�ӠF�uXSJ�x$�8�ڂ��45}
3�c��C-n�4�xA���b+Lm!`o@���d	�BM��7��d���WJ�jz�d�t5v�Ua_�Tan�E�]�R�$������֞�2eEC�U0$[��U�vu���!m�2r��fx��D��37�}��o�H~�Da�M`����4r�F�a�ϝ��vsPƢ#��AߟX����'V�Qx��\g�Y��G�0��Q8S��+�[�GH1å�.�*�|'�ب�9_��F�x�?�𸟸s�߃��o��
����&4�Yj<ुCsoid��p��4)��,<vN�֢���뇏����}�q�v;�VeX���&N��Gg.<��Ef���x�TY�Aw�,MR��qD�P�@+�vVF���=�P�K��p�������;�<}�����9�e��O�INQ�<@z�3a�s�&�vD���Y>�� ��u֙[�8��g6��,���q��i�g֙]o�8%�=�zP���ѻ�.�Q9	�X�=�g�����}N���a����}`��X{2�!��*x�, �1�jЗ�����{~�w�9����{���>��ǜ��I���y�~�?��W��v5��0ݽ,*�,���>�`��]��5�Mbc��$�W` ��;d��^�̮���J����2� z��N�Z�� Vxl⟜�R?HQ?�3�(9ϟ�p�������V�U���t5����7��Qn�ڄ=�?�ʳ.�L墨��u��;Z�s��m�6wU{:��
����M��-��&���{����F�_�w��	�4��%9h��1̈N�!�pc
e�}����̃��v6Ӕ��������q�ܷ��ҭL%�U�����-���
=C��!M�w��g���YL2W���*]h��A�E6��NB���%��0 ��N��4<C���r�B�'\��(�m�'䙺/�s����,3l.��������-S������-c$�3��/�s,j4
7��-�p��r��FQ�!��s�
����n�����֋��J���ھro��`�i�3j�w6������o���=|���3��	s,�������U�B&W-��vU@��{k��fG�ejyH�
�h��	K-���/2Rh#�|.�莻
���ի܂���oh�+[+e�5�E6��Q^��n}'_+������͵8cѴ\]�o�7ڝM�, º�R؀st��)��G��L�1��N��GyA�-��=�����{�v+��qt�f�#��-�'取N��Q��,q��X0\��ہ� D1���H�����>�z�ߔH��s˟)42F��ȈƆU�X��t�=�%ܣ�2d"����uY+�"���̠M���bW9N��f+]KW�S.Ҏ��l
6�K�v�]���*\�����m�[��oR�ڢ����O��=F��i��3;x%��U�|�	����"f	�w�f{�"Lk��_�ͱ�ZڔCט� u�)�����0��t%�������n앻
���Yw��
��e0D+W-��-�����2J��ڶ�r��E�+ʨ�e�KMiV�W��$f	�i5�ugiW�1I7������$)�O�nl<�o<��Ӳ���L���S^I\V|)�">{��-z^�Ew-Y�k��i[��;:k�S��ĜU�)�5���22�/,Y�Zsc�[$�C�� ai�)j����h��l�:'�-��c�^�L��k���Y�)R�¢6��Wi��a��V�.#�>�o��e(UإxEd����dPߪS��7&M���i��j�K�U��9�ԫW�aҸ;��Z��g���Ʃw)����¾z��+�`��L���hne���=�8��F;���o�
��_1/U)̂��]4�m��K�����F��\�'�-�2�0��|���[2.��W�L»��ho6s���[�������H%��݌'��Ic�FN"��Y��N��zt�:�xz~{�9����P���>�����{���������D�}@�
u�!2��}}�jG�(]궾��.mkL&�%�Z��MrN{�g��2d��^y�0�]ڽUǆU�p/֍ݕ�u�z[�7�Ӣw���a^n�j���a�ڤ�������0��4_�ֲL�LT���M�h� k�|侰�Ɗ��[ﭽLssOe\�$���{�Em'��fq_8�4���.�C�/T�{`9V��u�E�Ƥ��Zl5�X_F:�}aw��oK%�e�w��'��¸�O/(3Ҡ�Q�%��p׽��x��I�I����c
��L2���a�Y� 9�Ik[<5s�x9h�]s����2E��7Һ��y�=XZ�xqZ��
����pO(8�{e��΁'m��,y�4<����P���0;���(��y�#���0$��Xs"c��_��,������r_��8eN�u����l�e��^�Y�n��;�֦���\v��iM�����םB�+ʰ(;���yQ�Urm�eծ�nX��t�{W\:�հ��9z5/�����jI#X��4~=K��+=~�P`.0F �a��	�'ϑ�qU�Es�X�&�hM�1� 	��z�1�kF=�䱶��iTc�Z�&0��u�yI]oy�-��!&��),�ԩS?�E'�[mS���}���Ш�J��O����Hy�M�i�>�O�G��@�"+�_/$�̡�J�!�����Zr�m�w��]펺+�PE�Xd�c
Ƣ�`e&	W�<JD��V���3�_���oO?�w�	z�B?��Id�����S1KNh��D��� (��z�<���~��E���3�~���rv�$w�-�)���s�3�/���$��������F�#����[:��66I��*P�0��4u�3�H�
���l@�́�'��7�]c���Izn���(�@5��L�0f������efy#]�6�V�)H���ޜ{ �[`���lkw�;뻫��.�s�Ca���K�!|b���)�k�/�,7B��6���[C� ��"g�YD���58ٯ&}.����f��x�K�&�-
��gl��W�}�0D�IS/�t*�z�F������&2�-L�dӻiC��ަ`
\���PZa�4+�tEf9������Ik*�y-W
m-���m�}�m((cQ�?����n
�8��L1��i�,1��x�g����$q���"Z��e�sā_b�c.��G�ŧ?CIna}�@ĉY�46��3xi,��F�R� tx�Vx�,b�/�?=	/��%W�4̹��W�9��mPs3Z�����eN��Þ�d��Z��C���9\^�GY^�9_^ Z=�	�K�B2V��X&ɱ�}"7z���֣�羜a��VE��&�}�F�ַ5`�k�ڝ5�zCn�04�k*~Md���s���,1�V�e0E���Q:ֺ+;PՅ�]�2[�F�����(j�z���ݍ�m�A�(���e|�2�sO��y�ӧ��.>�y�Ką�#V�0n�DZx7Qe̡�]�K����ke[*�ޥ��-��r^A�B6��7��k�t-���+�Av��[���;� �Ko'��ى��p%ODH�bF��OH�0���㗟(,�4�N.��	?�&f�5|��'!�(����L^�s�#���Ǆ���ϥ��VF�!Y�|ix�`��e�s�+)sn7-�s��eWu/+�8�#"�'ZEc�H�{':d���Ň��� ����,���c����i��#���r�ڥ�fpt�Q�Brt�(l$C��(�'>��Ij�G`��΂�\�˼��&1�R�}�b3�,��O|Td{� �ۃ��+�x��/ ]��;	��t�3+X��C��F���:��� cG!`0��-=�di��s(*(s"��*�6
v�Cz�8'n�M��;V�;J�)�j]L��9d�3В4)�]֥��L�]S<���Q��2�QH$��	�8��%^�~�gd�C��Cs��g<�&Nu��:E/՘6�٭�.��G=:q,Ĝ,Q�^D�ګk9���*�&<���0��n�Qf��4�wR�#Nk�8���,��\k]g���i�g>d������I;u�h�t	4U��1���{ �M�H{�K'�Y�Ѹ�=�qjd��]iWY����Oz�.�M��'�qJ���Ɣ��9��u.h�����q�O��i�$>M(�����]��%��z�&���r�A��g1]x�gl:�O�RZ�VM����R�+�w���P�LZ�R�F�|O���q�,��@���Ή=�~���F�F�F��<���45�YBg�;tζclW۔�C��O(���~���:��It����O�4&Nگp2c��{��%A9�C`�GA����G�����;`{���w������T�>G���$���,S���E�T�N�� �9�%'nub�Ga���q�;4S!�yz�V��OX�/��<J��r3�R��~��!+iTۀ��A'O
X�%+3yFƾ�Ģ�^��
˱[�E���4���}�{� !��Ml����d�g���3`����d�����ai#���S�qJc��g��% ��Q��I��ԥ�*��Y�8z;(�6ul����8J�zK���*�:����������d��6q)ݴ����X3���,�%X���R)G��ΜG�}�����9�(6��,�� g0������G0��h����~�Z}���U|�J�G�Q���{�&�ީrNR���#��� Q��`��W�m��F�y�
���t mKR3�.	<�w���F��#V�D�������$'m\oiN�T��.�@X�@���G���	84�;qe	�7�2��!+��Ӕ2:��;Z��#���D��+e� ���K�V�����d���U���0
��Ra���؃�Atf;T�3��0\�����qJ�FO�Ә.~�[�.�m���6#�+�Y��Qΐ�J@#�ġ��	8�D�C�Y�U�| 5R#�#5
RK�s���Ah�J�|#o�C���!�"|�nƆA��^賩�,z��f�]U:��S�.6X:�Å��H?��Y/\�O�p���e��S_�<ԃ�S_��G�_��|4�ſ��7�<�EmӺ�����G����(4�I�9JT��-��D��@�.UL�F�`�ZAk��ihh��ь _|�2q�ŔN]BcUG5	���'�S��s���0@�%~	����a��I�c��.5�}#�X�����G)�[�Oj�h�������\��{�� ��'f���خ.��'5.eT�>�N%+g�i9�١Yo?vk���YRV��;f�i`p#�@=��	6;F��j���d���?�^P���hγ���wp�����M`[@S�/K'�E��b>��fA�8���G����7�
���#�2�.�H��2EΟR��q����v�����<I�A$��h��2�x�*5���p?��;d&
t���d�A�EO��Q�8��4Ƚ2^H�p�2�w������+Ο�0n�lCjS���+a�������Κ]�����8���X����f�%E�h�+N��%l�]���<�"���Ȅ̏J%?&A���`�Ǌf�Ca�F�1���/��: ���f}�9�=��{ߘ��8���q���Pװr��h&x�n���\0��Y8�2�N�V3���W�:���v�MeE&�Y��o��p]nʙ��6��F�ikWnk����@0O
���G8���)�(!� ��(g{>C�1�t�� p��\�^ �[`
���0�R�$q�F&q-h�'��,&v��4�I��w16��X�)�6��G����֧	}�i<Mu)\'���4z�$N�Q�]k�j8N'pFN�*�YDo?I��)?�����bpov��x�ix�q�^<C�Y�O��K�w���vG���t w�D�=��]����g��ުr��23���o��6�P��
h�,:�?=aP�a�,�X4 7|�Y��2��^Pb���id�Q�&�#��� �ӌ�t�����<a"0��o�̗���^�Hw,��<|��y��9�� ��$XO�	u`���(*�$����K|�1R
���>~���s�[�xv̈́�a��supP&?Gt4b��[�:�1u����E�M���{SG�@\Kcp���9K��'�6X��M�b�����E����Nk�;v���~���D�駮���w��I��R����_�bdk (0>���c�:�#�I�F���~!�D�3�L5�����T������gh�<Z�#��?�D,J�6yd$i`ӻN����[o�;�-�%ih rej-�z�;�Q�S���V��;42��P�`���z�sW�g.%sd � /�t��C�4��:΂`�@΂�8�Ϣ �=��((5R&��ށ�%w)S�Lԑ� p��\na?��`m�,���}b�9���Y�vi�����J�Ĭ[{��[: =U�����]�?��>��n쁵�3imJ��"aG!h�=� x��(7ҁ!X�R�tz9/ah�;������40{Gց�$��< -Y��>�	�[�|i�[�a�j�Ae&�9y���Y���f)�s�ȭI���2��]g��Kkk	e7hR��6���+k����1)��#P��U�R��+�R�o�zD/
&�H�`�{I��N��p��������&���C�q�e���X�a�C�R��șu�ء�"q���Ih�^�-?���}�<(s�H�h�8*Di߈�Q�c&a蓪p?t�ڄ=J���/h{:^��e���N\c��
zRt�%�ɳ؁� ����|2o/,�)F6�w �<
�-V,؞�!H19/3`��b��2�6�7�>�H탤�CɖYDQAe��0>M蜧Qu�,:ãN�$1z��^��f~�4�qLg+;�6�02�x�yL�Df��Y�-fQ�YW��`�*b`����iW�NCgA);�b��89��la�e�4����D�ƞw"Л�+�y���@��{�C��49�+�O,��z�������E3CXC���2'��K�Z��d�q�Ԯ�Iq�d�G|��޲����A'Z�Yo�m�N�]�W����*d�@���鿿��j�Q:K�\#�|�<��)�±�W�皂��w��q�}�%�l�%����v�FIӮ�z֬;�V�w��5�,k{*�n{u_���(-K�W�Vm+;ڽ�s��ﺢ�Z[�ɷ�[�M�)�2[���vٲ��n-�4穧��+����`�Г�NiG�]n���j�Ynɶ����g������>��Ӊ�󿅹+�r��In�����,�2�kf�Wv7]Z�}P�O=#NX��n=?�K�x��4�g7�w
7v�<i#�F�>�&�UbRC�}�qp[�ۇ��jK�$e%\�%3P�6,�ͽ�s�܏���{LZK��-"t�n�ni�l��W�V�*���c����
ݼ)k�(��S�@O��4��$k�",_����"e,Ϊ�r5��*��f�Øn�]��4bD�7�������>p��`��ٙ������L-�Z��2�{�z�"5B˻�����rr��
c�ht���8Ad5�֡�q���n̴V	/s[�v��8������X���8���Yi,W0NU���]�]�@j[ygs[�V:uFp~���y1}�7��{�O���,������5c�+b�&��/b��}3b z3������ӏ��A	Z"����ȵ
�tU¥��J����شqhf�Yv������]̽@H.�0c�U��n[R����V�t{�=}{Ůs+�W����bR���x�HC/�������3�YL�8���.1N;f��ЩEbP�uv%h�J��v�֥&�1�FZ7�KV��v2�^zXǤY��0~�k��"�zXdM=σ�6K������Φi�v�������/����t�9N�%���<"ĩA�����:�3����4���,&���G�]P��>b_���G��=t~`t��ų��%�K�G�`ZD[����r6(�k����M�)ogv6�%��.Y`��1b�z��}��9�j2�{�
�`���K!-�Ƭ}�e�-��#X����J$�.���m��ae߇�q~�>DL��("�q>&
-����)�Q���)�(�3�WV����m�cu7��w���?��r�����j%�ޱiSc��5��L9��r;��u�|�_� .z��z� �� ��M�I
z1���ZE��8���4�5X�Rӹ��HO�&��(3c����\�٢q��������u5��r����Z-���y:���c��@�$F�SmQ9TV�EeAT��`�7�P�f��=	���y��
��*A�F��T���Q0�GP�?�ŏݹ��ͪ֯C^s��>:����(,�6)O��-ܨ�5$��������?(R��Q~���uLyB42[i��%k%�Jguw�]j�r,%澇�{����>���7x>�R��#a�ef�r�0��/ILؠq*�
�$|?M��R<e�����_����,��"�O�f�]mչu�r{m{m��x�S�*:�������Px�����zb�1ͬ�J�y�����_���q5�F��7e<���e�Ƣ�I׈
e�7�jAl\q�ͺ�9B���#��1L�:7(�"r���~�q�g"��"s���=�e���BX��[yO�.�l�*v����*d��D8\����@=Ys��kR�t�`ӷ&(��\�`X�5%��``��u��T��|}ݽnStUn��Ǝ�%mz����Ҡ��E&��e���=��l ��E�]��G_<�ط����ix��5V�[�k��.��E�$��T� 6���RF��t��t-]x�N�UaQ0Th$F��f�EN�`��8Jo�I��e�#U��ce��ȃQ�	��]�p�|�����p|-p>���[�-��1��l�k�F����pa`�Y��7�m�d3��l�V@��K�S���h��	�`�K�v��Ӆ)��UK��Һ�\6��֐4��B;~\����97ܳ�B�h������[����B-�AA	?�W"�����?�b�'��x�Vz7y��E"���=ס}�j'� �7���};�Ur+]���Qn���M�]q��r�0��S_z����s����׎Qf!��Q�{o�e�{򨓠�"<�Eo?�ú�nQ�Ո��EsU=��_�Ts�"#�4����{�+��,�*�v�K١���0�1&y��-F�fXXӨƎI�G^�|��~.���{}�<��.<U��z;t!��gE��9ᚳ�<hs�`�6ic��l�뵕�
fa��3"e�̈́��J,�tc�)k��]��Z�dh�rPN�q��H�3NL�Z�1sG�0��
���6�-�R4�M	���"e|a!$Lf'�qӮ��
�ޮ�[�WT`�)wK�t�D��:��sn�D��E��ew�I�R�/���e�C�@`����Nc��,��z�a�A��g���'�("�����;ʐ���a��f�!���Ys��﬷�NP�b���tY/>��Q�����l, Vf<\ꁅ�f7��tn�F�:�MO5�1CD��`à#-�_�b�s�Ќc$/c0^��&��v���6�����M�Q����`���6<��+�&����*6��Z�
�M�f;�Hpoئ��|���E5�%ʢ}sgu'�)��yP��V�+I�+��#B��	�?G���}�A�����+�yE�ρm�x�N�"��Qm:�Ҧz:C���} k�^��v�}͡G<��r_��aոVlڽ�n�)�j��O@AB����X�v!_��8q�@,s�r���4��`L�$�7��n-st�jfxʼ����nYo���s������RP@Q^�����;&�Aj��w�B� a�2I,e����n�=�(����.�҅az���q��!���\g�I&KtH�G)u������e���m��Z�����r�¿�q,�>	~����[ܝ�]��w&xքz�E��}���"��=ԗ�3Am�Z���oZ����]��k��oJ�J���97	���?t+�4߀h�I��6�L^��+��ј�u	�lo��������%�~꼎o��0�
1C����Y��떈C�(��Ym C@��7��p�ۍ�1�l���L����M��O���ܷ=B�TLY܏���:�v�X��l]R��,^�Ѣ�g]!��Ma�<!zā�t�>=��$1�3��a����$5ƌ<��Y�G���\��}W~J��E�����W�b�>��-�G�Υ����
^�A�4����7�ແ�HD��mP��nvK�Xn�[9�F��y~�_1��_^{��1]�)�kmv��4���Y����'��qE�Y#gS�L�T�:Q)��h�k]ćbl~Sd��ns_��uٖ�V����3��ev�*�.�JV�*����]=m�� C42�%�%���^���l>HK֕����H���Vr<eH�|�"�ȸ4�sq�?^�W/�
�,#��ʊ��P-Ѐ��{�-9���b��o�D�}�b�]�N�m��X�o_�Z�L�zzgݽ���ۘ��jf[w��m�SH������c90�L��� ���Q�*X�s���0!�? ����f�m�]�ո6�䖴E��,��T�������g	a�Ì�|�b]�+��9�wDH�A�t������z{ú�Ƽ�1I�z�����6��jI�%_%�/Ss}C�$ 5�.�̓b��������o��5�N��g�̨v�-�ΊK˯ܢ���G]h��B[Ĕ+�'2,��L��ɳ�"v�BP��"�*���s����"f�3d��_�j�EL^o�o�Imm[�-������E��&���חr�ܥ�_�䪹VV��Y�U3U�?]qdn)�����l3��l(��t+[͂B��_��8b$����dFt�ب���ʪ���[����w�5W�<u�_��a"�9V���+N�UaCt�����6+�pe��H�?7�9�IR���-`��:g��NW��P��-���*Be��ģ���\#�*��vP����u���b�t�v՝ͽ��W݄�/ʅ�˘4U�(�z�\V%�Ltr��U?��-�EuT��ƀ!H�7�g�U|�Ci�X�.����>��3�Q^��Ge]+�����z�����]������V��UeMS&�����8&��dlJ�X0�t6�M��X&��M�Ru~����e*�2�d�Vm:P�4�Z�R�i����W��z�q��-$�5�E�bL��8g�il=Iy��!����X����p���/D��2`!k��%w��K]�!���H��P�=E��^�.[[������y2]�y���*�gN�)a[)5�bx��+gѨDhY�S�i��_��铏.��2���.�ڡ`�nLC��������ڞ֪�S�3� ��W�@L���rҥ>��z,�}�8��3���_&>�b�1����G�F)Ur��ɒF�����RS��d��^H���#/[`�cH	�|`��4����H�`��O\.래�)c�%��6HY��,5��f��d�V�K�֡����]"(��w������Y�R���`�ET���q�PP���3��!y�3��x8�^]��jr�D��[l.��\-o����6���3�O\Nm�k�Nml�V�Ga���r���+�*�t�8T�3(h�`���a��J�F���K��c	S�Q�t{�O�������#�pi�P��0����K��Rd��:�@|qKbP�fj+S�m�-��a{�I��i�y�2 Ӵ�YX�Ez��As�"Za:-Q,	T��Hk������/eM9��R3Ȭ���Ǝz�T+`�\QFm͡���֥�+�ݴl��uhd�j��~H��Ђ�B+�.�s&�X�nng�*�r��dwр̞��~Ene@/�7)������zG������m����+fϰ���^�/��
m�7��2�c�"���*��9�v,ʰ�;���Vnwu���pmbxp%%�6��:7�o\QF8;��!Px[Z�
,��vɪ��:6�߀g^Y]�E�Wb�,����Km,�<Xz��B���'�w��I�Ϸ�����W��C�~�j~h�v������ơ��G������7~�|s�7��U�Fe\���e�O\����﫶���m��M�[���=��8�p[���L� &A=����4z��(\�̱M�[�@��W�H����ޣ���U��+x���
��e
�ibS�)���/ Iy�n���]�o��*w����j�f�2Ȝ+{��?|�1_h�3��'���g.mr~٥���3��w��7�.s�d�|~	��P�.v����|�v��{1&<i�@�;�[�'q[\�ϰ��|��W޸_�/<�����]�������l-�Ҧ�62��:���[���v�J���,|�9O�����/�MX>70������v�L� �t���#��#���Բur���ʭw�YS�P09s�U���G��#��	tcQ8u�����Dڤ�id]��ҹՃ=��G�G��R&��Al��������#��Q��P�oI���^�_���״7�[Ֆ���;GW���E�o~f�-�$h�妼F6����X�,U�V�J�����6�2�+Q!�2�l�Li��V��ګ�U����D�M�qEF��7`��n���Wj��W����Z5�*�{:z�жX%#7eL�+ﯷs��X���z�j��
�v�C"��ԋ�2�W::s�J0��M�޵iWZ�%g�]�ڄ��H�>9S�LW��l���엪^
-���S,<"R�k��C�ܴ����\��v՞b���i[�Q�ԝ9oT��E��;#�~�9�YZ�l���*:jC~+o*��͘H?<w��0���@�E��S�V����V���thБ;)"W�ڹ�(PI��B�aPb���%�z�Px�]�8�NR��8~�<N�EV ��1���aV�EmQ�&֙K��[�am�8~�Y�~v̾�J���=��}���ۼ�xk����g�`_��vygco��M�hA�avTc�aƼ���Q�=��h�:5N
����Q�W�s�!5��RVb&�*�*8��:�Q��חM�sa+��Y�, d�tjMGA���GT6�U�T�,��z�'���g����>t���@���M����Q��g�	�nF�,����Ua��Ͷ(3ʚĴ�1��V�K��ϋ���w���f[��iL�%�g@��W���#�^��}#<S1����\����;��B5�Ȯ�Gh�U8O��As(�j�Ʈ��!�B:Q晔r/1-MR'IĢ�U��s�b�co�W�'�
�l[��fCr��U�u`
6�L��f�H����%֕ն���)V2�|3��)`ޅ=EW�")�0�E~�z�)l�Z4OUs�+�C�]�j�i�U�S��VE�X��d(�����e��o7��W�V-j7��YZ�vE����lG����5�Bp�:A��FF6�����kxfO���V�uí���W;kv�Ij��AmS�4�=�.���'.#Ń\���k����߭�+\Qq=����T�tٴ��I>W'�Bs�[��x�~$��n�|��X@��h�?� ��g�	Ȩ�`h���d �f`��<�2�-�]'�}����Ωqh�Z�֮s������~��a�G"�ca��rwݹ����ծ���ڝ�S�^�SY��@@�+Ə��� ��Z���R�e$�����-�k�����v|��?�Q0�2^^�mIEFj��X�۰�:��y �D���i(#�J�h#a*�Z�/�ru����f�l	'��+ʰ�xʐi�u�]6��/Tr��Ր�9�2��|TD\��z�����{�BF���]c�c��r�f�^ɲ
yio�S��b�����Ti��Y�C�(C���R#5I|C��3���O���!G{F�:F��$�v�9����C�̳�G��I\k��@&�/D�Ctq�Z��/�)���{[yFj����e���ru���]�׹���U�rw�a�w�9t������Qm�hC�s�srJ�O�k���`���F}ݢ���Ԁn����+�v�%�*ri��rV��ޟ+�s/hJ�B0 X����܁.�{q �m�����i�ʐ�Rs�)ؑ`0���3X�$z��~�<@�G��o���=~�ٿ�ǯ0a�y"r��;Z\o%̠m�{�å������ [���iXH��H͇K'��|
p�)<-;����DZ�����uc���g���Ƒ#g�?E���A�0�O���n��ߊp��
�����W0��k��nU�vʝ����Ѣ����#��b��F	??�w#��� :p�(]��H�������s'`T"(M�-��N}x�4�Ң-�]"bwl1�1½�O�ϖn�>��{"C�_|�~&zs�=�s�!߁���U���͝��u���V@@rt#�8Cֻ@8l�͒��%�B�# ������$&�e9��C��)��4v�$�n��պ�vX� B�9	"ӈ
�&=��@$�g1��>�Rg1�k?��:��J�tv�tV�N��q�R ưEo;��cg�YJ�6�K�V�i�ȇ�H�?oJ9���F��u��{}��E.�[e���Cߥ0G��u�1��=4LL.�KW	>����Qq7�`��Yʩ`���ʱ_;:�i�s\ӸH�A B��G�I3�8���S�]4�Y'�$�h�02Tc�bW�ϒ���6O"��i|9M���&e�`�
�:��@�	�A`����l��Ҝm���]*0�jf{�N6)�l˰��D�-RFf>*|�U�a��U!�h-i5[+�J���t��="�ϗ��e.4��Rwe_c�r�,C7�h@v�n�"�ҏ��.Ӎ>(����y�a�rv�C�H��6-BE$'�i�a"�:����"����~I� O#��y'r�{����F�V��Ni/��t��z�ε�]�U�l���Sx�{E*\ k^�u�fk�J��Q��D�д�r���:�R?�7C�����L�P�G"�������i4bw"o�X7/���,M�ʼ���}9Q2�f�U2赟QN�rL�^�u|��ۥ�j��O���)�l�<ѱ`���tEW@TFP����Q=��_a�T���.�S����:W��ef��7����bo�ʊ�$q�F%;�����!�v�k迾s#�s�p@TU�k=���Лec��o�GO}���P�Z�.��4E&�=�n�٨>���3M�ɵyI�P�KF�kmW����<������s���o��x�Đ�(򒭧�m%Kڴ�L�I=�����a�\T�O��C�4�|�{D����O�;����Z\�7��F�ˮ|d���~�!3�����!;���ɛ�N�����z��#��݄n��C~�K���w������n����oZ����v	n��K~���G��Aӆ~�|����{[��L� O�(�@_R��J�3n�+� vu[���CO�_�?Sy�����G ��E>�ʛ�'��gw�|
^?�7������8�^�l�®��p*��C����'��;D��ސw��<�釔�����;�.;�c��d�o�*��pg�_>���'���(J��-w��"d���M���"�殺�d�����c�L��Y��$oGn�M6�Zq|�A~d_��+��\{�*�ZT�x�s��ʼ��>1�p·?)2H]��s8H;��m�q�F筱�`
�������o��#���r0�ǵ�oo��z����S�n�n&�[7�x��7^��^���������J���_x�s�ڭ뷟��D�g������cV��i���Wr�@%��5˪���E���������_�8�J~�1+y+y|�����5Ҥ�����}�K��19z��t�w3?[y�+��Ǭ��ٗ�=u���p�ڮ����Ģ���y;�����;�*��ǝ��q����9<�k�����r�z�=w'5MM�/�ŧ)��gfX��=f%��x7>����9����t8z�EW���Ub8�>��8�R��)V�Ǭd�tp�헦�q�IRMM����JUMyz��s�>ꝰ����'X��?f%��>yk�����[�f���7R���Z;t��m��[O?����������>f%w^|+y�{�T{0Hg��_dV����3/?w穛K�����������G>����'0@�r�e��u�eǓ�����?��7?�γ���w+��Ǭ���q�,um�wҭ�i|�W�4����W��=u�^���GX�/=4��y������v���L�Ebzv��:L�����Ƶ)V��ǫ$�{f�� Z�^�(���|歗*��󉃧^����g���{�|�1+y3|���/�Ye�3 ���Y����ϼ�x㹛�޺7'��JN�=~���7�J�0?��K'Ϛ4��	���A��^��Ծ������Ǭ�΍��f��)w��\���f[4��<w'y�|+ua�~�1+ySE=��5f�y�]�-�����m��k�}����ʵ�+y+��;'/�co<��h��R@���y�Ӛ�[��o>w���Kǉ�=�+�Y�45��ܛ��F�6~�Nlmm�~�v�և߹�n�䅭z+��ǝ��i��,��P���oǷV����k/N�FɣP/<;��gP�o�(%?����$�����ҭ��Y_���o������5ϗv$umhG������N��i�XfՔ^z��I�F�t#�v���ɋw����{S�[��H��\煓���,�}�'230�����O޾>�~�|���o�\����ֲ��
�e��!5�L�d�UژmJj�����w�9��E����W�+�]������.���V�)�	,�w�
[(��0`�Z��HjdS��-�HmI	+8���W�!7�[Fn�[�Qe!�LC^%R����ش
�m�wű6��H����CkAO��lQl�R�c���8��W����-2���+V�U�[����pi�4��p,��)�[��ݫ\=[/�):�m}'_�4r-Y�d�T�[sz�X�s��½ﺯH$��`�,�G|��ޢ�*�歐%�'@�H̄Q�i��Y�����#9��!�,v��N��az;��18}nN�������8���0?�M咳������1̌6���G�pߩ�#>��%���ȸ,�Z;+퍎zGm�v��V:���r{á�w�����e4�Z�����nP��0��b�h���K�X�ж?�q\d�]��/p(>z��|�'߾Ͻ��`���p��'tKݢ�o�om���Mt��&o���gY��77�]�7�;~�|���)D��ݶ�}aD��-u�r�%kQ[٭+"��x:d��3ȗ�(�'��;��FG�d�ewig����U%,Ք�t������D��b~�O~--�\�x����.�	~�%����1�m�I<�DD�Ş"��`�2�ϳ� �0���L:�q�������O^�ϛ�H�V���D����M��i�/���}K_�$��!���(�ަkM�cm��)����ʃCX��$��Q:�JM2V�!��Q��6��0w f .uU�����:N���6���\�RY"p�E��n��?��Dȓ�RaP'�V¤51��Y��~h��F�U:eށy�4��v�]>ٮ7K=љ��ЮIDkUD���4���:)3Jј�ҥ� ʕ©NG�n�]cсꮂ�1eL由� <͑��_�J�pHU�gvnh�"�����'~�<��$����=���eD_?Lo>QF�E�DLu��Ǝ�Zr"�a����G8�
�:��_p��I�94ErD��)#�&�;q�OR����Y�:\�8�.�:��0b�~��=%���@��M�1��BI�Y�$~�Y�X���3�J�g2b��́�h	=�>����_ȶ�A��zʀ�g�U3��5/=��'gaex;��#��{�ފ�S�TO�9�&9�x�q�������2��Ml���v�R;��I�,�@j�4�p�1��������\d~�ٴ���mX7\��A�W��`�"��!k�=���J�՜#ˇnѷ�n���L������W�y�Чt'�^���y��=���yέ p����cc�|�;r�9/2��������=I�9�g���u��9��#�cp!'[Z�o,r��B#���������.t7<�1w/n�EF��?@9&���>w.1���|�0����Oޓ��u�d�KP��=��,��4���,q�=��S���v�R�Ԧ�#:4�P��G4���� �O><�N�d��f3����_uW�JF��6�l��	��W���*a9��vy[�)���9ʝU{Y>)��_�kׅ�f{sOi/w�\k���rW�V���$���!/����qz�(V��e����ֲ!�(�W&�-��XƋ"e|�i>�S���������I�9�I�.7�
��j�ti���D�Xd�1�;��b%[����im��ڴ�1�9IC�~��1�j���Z�j'S��$L֜�+��Vސ3HM˸�����/ȏ_}f`�\��;�:�+�ͫ"��]�������#�I���v�=C�x4a�XT1=O��!�<@�]�]c?Ii�z��=^�~�}o8����"|�x|���f���J�Ҽ�	�sKd�Z���յ�u�no�Y���Jw٢r�k�MĲ�2n_Q�A�U4���$�d����/�Άk��r���ΛW���t�,Wת�zgõ�ѵW26[K��J�%���D�X ��$�h5ݤ�ީhg+��C�+Rc��bp��Whpx��|y���G<�4�8��^��z[�V8d\�^�_u蜠Ӹ��Ҏ��w�����5�;sȩѱ_�g��fi�9;ro��=�L�X�y���8P���]O�ܑ�1z^������=�%�������H����jW�=���2Ҿ��y��{��yoZ��f1�@+aF0�s��8	 ��aVH��!��`K��GfV��~QY]��g;OvV拸�ƽ����}�'�K����Ve�B�g�����7�9^�~�Q�?l�帝�'	�߿G�"�!�WOѫ�}��|�1^�Z"�e�=&�28S=� �6��\��1��nS+W%��3^Us�u?K(���'�o�f�V3 k�؅q�4]�G���ȿ��(��`J�Z9���.���|�j�6�
RS�gsS��)Y��k������&v�Ŋ��q�x�~�~���'��J�������0�� |�6���?[��ݩx�4���p�b�r�J�*₇jѺNa�6T�e�6ƈ�l��e�V���2�t��Z���m�leB`���f�u�=���ņ���A1Y�e�k*c{v�~��_%4��) /��Ur��m\,�M.�eL��-�aN�m�rt��	|h�S�����Ρ���dK�`_:���o��Oe	Q=M^��|�l,�ixs��ts�TJ�Y�2\�]] ���m���d�l����{�fO�@���U���1�=OI;���0;V�������T�tw
�N���S�8�*�?��q��U�ц�5���\���4Mނ7	땒:��mPV�5���u�D�v�$mI˅k	!*�5=�ŕ�R���?R0|�wſc���g��E�|~(�ǚgj� �"�\y~�`<F�o#��і��e��gb�P-�qX���l���ӕ�C혿�{T��}ס�o��{��8�>1��gq���z�m�ee��I,N�A*%WR��e��{�`c䴜mg�L��ɴ�;XfG��3&�������#M�Xf��S4�^Wi=����^>$4Ș'"&�n�"����o�O�0�{�3m��[��N3�1y@�(�B�$.�I��.s���A����F|�i�Z�sԜ��.��t<F��u�r�lt]Vq|
���#02i�9�mӘ'�p�5��;�{R���n,c1���ϩ���u�uM5V�"Tf5Q��)�ex��l5OJ?��'�u|�FI�Z�iduh�A���ez���c�����_�5��=B�J��'���ik�i72�+>YWe�Qc���u:&w�k�AF�kZG�JW	^ь�	ڕ1z�\/��`��/ӵ6-�d��4��*�P���Jc�ْVH4���eM�.&]�A�g������9�Z���yi�Ң�
��J	����F�@�ɧ��Oo�j
t��ѱ:#f(�v�o��s�t�q�Gr�=�<^=_���22��LY���l��F7z2b�Nu�`�>��F�g��ߵ��RTR8I�T��7�:l�i��Iw��Xym9V���Z��Wb�0g�΄Y&i����em�ڑv���]�V�c%��`X6��2��w��Oj�	Hz�Q��=X�v�|	��h�d��2B�m��Mf��Z����E���0#��mw�������4x�V��V�-�S�sI~J���.��j�p� ���3�+��𩑢���Tz_�1���f���#5���H)V����-�h%���*���	��x�eZ<X<��Zߚ��5N���=�8Z<sZ7�=k��+F왣}F�'��Y�w~^ �I��F��^�����D�5�  a�Y-]����k�,�V�+v�U��`��]<�h��5��lkfٲt�;\:�q�;�@�R����q
�Ն�#�vY�,�<�0.�͒�\�����{	�)��#0��}�q�*lH�'2���8X؜�<���,�,��=&ׅ�R}�d���f�m���E6��xOWl��Kv�ϼv�q�؜>�@ѳ�ݙc7fihE���]���q�D0d@'��г�-�5��>��duw�����q0����v�v�Y��N�`zkJ��vg���	9�Oqwew^�h�����<XA��K'+gN��R��>w�V�gvV�v���A��=�;�"�)�:v�B�3���ޚ᪹��Qw��{�w��ߵf�%F��U�GD�èW��~�m�µ�W�X���s���3�13��H��7�EKK��V_Z��z�>- �M��W�o�vG]K�?z���{��>����S�>|�����Oo?{��������� ����7t��%��	'r�|�M���SA�Cc$��ʽmi���z�cnf�6�eP�%��i���}�xt4�Zp�0�8��䠫1Q�7�l2!D+
��WOR׉���%�^ޕ*銤j�9����Q_3I��5��L����X�j�KZpA���Rú��U�1r7�
yw�i�(�F�j�&9��uH)��ބ�"�D[/7�y�ue{_Δ� �)�ś�g���c�QE�~��h;<8�a�5k//��/Dw�$V˿�����o�`������x5���k�G��������AJ9]�"a�j�gkF�pyX�}��{�q��@ʭ�vf�>�?{z9��]g�qB�>򅠿�a�J���JT��Ը*�4�=�ۭ	�����&c7�˴#�|�2�K�r�A�u��+�X�����x�s���q�D�'ٜ�������9%Ka�`thd��K$�|�Y�}ܟ��K

�/�#�߰�_h�����<l�X�t[z`9��lo�x})XG��ԝ��@[;.$�1IS!��H6-B���a6(�����T�ۘ��N^۱dp08�kݺjtQ<�i�}~;��#���y�.6��^��M�`W�L.���vZϡl_ښ�
;�{�!��W��6м���������IX�^��=6��盙2��jZ�յ��k�+b�ӓv�@�� �IZ��F|�(���pul���1fSa.S7����M���/4�^k7ݵ�m����V<��pl�an��F�r�z6?R���9���q��ȳ�����W#]�B%$�$Y����%�7[�uG��Nh�iyR�8<U9�E�m�[��\\�%*�/�DET�8֤g�b9AUŐ
tP@N%��y�2߭��w��kѪ����1)���3x��T;���#�Kbߣ��w�HJ�r�-G:�
� �P�8@( ��l�;�n�O���<�_���+�9?����Vڿ���&.����e�C�ݿSH)�E�B�PP!0$��f��6������q3�d�Ň)F�}�����}���(U���*k٨�q�J�R�m���*6���1F�c�E��kЍp#RL�
r�g�F���E��*�g?8�p�N����Ud��q��,꼅F��X��9���cs"1U����ɶ�m���a>̆��A��Wƣ���|tY#���K�n3�BE�?j1��(��CǴ��.��H�E����t;[6(>>P4X����ȱ&x}=QUc�P#��Z��Γ�=�Z�o�(�����1Nu�n����d)Q!-bҌ��<)�ͯ�^���68�g1�67�d���
��H4p��:0�����M����H`�C��@Wb\��I�jb����FM�&��j�1���l>���:ӝ0�)�*ʘ���6*!�J��>�(H��N�?U"]���g������	m��W�5m=�W�1��/�
�2�8sCʟ�4Z�]��Ӎ�zڝ�i����1$����I��<�����j��_�����l�]ƞ��~FE`^��!�T/屹A����+4��ar�pE�}~vRT��5�P�v$j�R�D��3=�l�(��sڨ�Dm=�AX�O��>k7�ɹ-�L3X'��2��	m��낕f#��L.{/ڵ{l���1�mn%�oT�p��R�p%"�9���oJ��N�-��3�-���/�xc'5o|,~��m�/9�v�}�H� �`�j��j��C"��9��Hwl��M�\���*.��I[�GF���0�K*=���d�'  ]�(G�	���|��)ŅH-ԈI�Z��ke��  �7X����9�����N`gS˰���6�6B�uԒp�8������2&�bR/�ޕ�ם�����g�FK��x��-u�����y�?�Ѽe���dɺ~��Z<�����������ߜޚ�zz�t �`$0�n�^ڡldO�6!���in��E2
���5 ������*<)�/�W���%��ތ~��y���'���|���#���w�th$��z̓���1v �sN�ϱZ��+�/�\��i+��*��ðI�J�D��]�t�B''�n���k��ϼ�@ㇿkH����n���l�&&X��PP���x��v�Q6�q��SeKw���`Ԫt%X��2h�F�c��IH&TӖt-�����'�$�82nl���a�62���ĠN��� �����W����Rk���PX}p��#X���~��ҷ���.�2�^�g��]�N���b��M��D\G��p~�ޫ��b*3��R0�p��<.���s�Gy��MA0��g�?��*��UB뉱jD���x%]���їE�p6ݬl�b��O��j�A8L��i���V��yW�׎�6s�U�s$��p�v��/Z��5z����oc),����;G���߿��ݞ�OF-����=n3�?M�M0�͞����������/���a8���k��S[s�p�tm���bO��G���~�"�p��Nv�^{'�3;�����o�U��w��D-��y���3��,� �X'iX�+�T��_S��1`�#�0{�l���`v�<#��l�[k���JׯO�/4Ha&R��
�|��:�A\"п/+����җ1��� Z�z��34��n�_�GkYo��i�w�7T�И��^�P%Ӵv��YYS���NB�Ce�� N싹�nIea١֐7��NB�;�.��>��A�rz�J��;W��&�3.�i�!y����4�l=C'����O�ք�+|�v��w���x-N�#����%�q��oO��%�qD&��c����		Z)Z'��vDP��ˤ6H!^�HGD"���-�])��ʠϰ�ߙ�!�������TI��y.��qPn{_�Q����O����HQ�Q��GWc�l/�΀�N�d58L���6�,�����#�ƪ��N��=�Z>̙9�!�*I�a�?��^�T���쵻ln$?�R�����U���.��WN��א;osnw��})A�a����S�����	�/�pm��5���gX�9���k�1�C��?Vic�����d/�
VH��������[��r��@��?UY�w�@�m����(4"�0���R�id���3xu\�n�B��������+lN'��/\|�����^<t���՜/-g��Z�km�Q�ʙ^
��v����=^��&@;6O��|'����W�m�j�)�_��c0^G���[l��H�F�	��BE�Nb���?�*RE���(�^IW�t@��->K�жI�/_�rD1,Ea�m�2���B���w
�PM��!�?�!�鯾oZ�N�?s�nu�/|�C�`����:��0�7u��7MI�-w��I��a��T��Ӽ4B�l;&��,id����j�^�m��{���s߽���:����',X�6qG��3{�|a�@.���l]uv���֩���lr��JH���L��QJ�$n��J�UG��7_u���*��ih�d��;��n��'�9M��hX:�0��V��G� Öo}w� �$�r�cn�{��i0�VL8��l;�Jy@!�j,�n���r2��ߩ�x�9�Q3����>����n��|�h�l�hy{J+���n�����U�}��D�#��3������|��f���4D�	L�wnE�ʝM���.#���_?r�­�R�O��T����٭yL�ߙݞ�^�0G~�߽��߹t'�u�їk5�Ҡ巻�kísLrE�nx��X�1J�1H%�Lv��b�mQG~�
&y�R���,$��`�����m�q���덾/����_a���ܐ{�ݻ�l9�K;�&]�^�T��4��<+�F�Y��*��r/K�;���� ���?�%ifwD��Y>����
r�,l��i��k_˓1��ݔ�;��o96�u �?�7��hC׈V#���ݩ�HT�U��q�޳E�'m����T�Y�Y>s���r�nX6�}#��q�g�󥳵#�yٲ|�h]��ے�w:GV�p�t�l�l��}vD�&���N�k���I��5�t%,F	VIൽ{wJI[�ע���t|��-~K3�0��݂7�Sv�� ��TMIO����B�$��/iE[[i�A�6�ַHrZ�Y�V�u���
9�R��i!~��c��J�>�m�`cw��7�28sm�HV�"U��i��B%��|D��1{��s�|&>Ȼ��d3���t'��z�dS��Ui�Y�U����/Q�ִ�wDA��/ƒ����J�(�L6���i@�B��,XJ��(GY}��Q8�	�0��d�S��+��\���f]��̭ڰ�ŗ�ӭ|�P/��Q��Mj:O������?�h �VwE����}���I9��xn���oE�h&ę�v��e�	�b���Tڸ��)��`��=Ҷ9]{�~��q�녁���y�o�V����͙}�}���u��hu�;�PJI�S�[v��zy�ّ�5�!y=�$_U�(��3�l޽�RmO�T/'2���z ���^�,�J�
�5,��W�ݿ3:wz����t`�'g�M���u3�o�����Ζ�Ce�gOˇ`�f�U�2.�D�qI�O�2�0���I�>H�F�%�`VN�� ��Jcb/�d���V�
T-X�1�:x�FU�.����	��r&�ݓ������v����cr���֔��'&���pTӲA�E+��0�ۑz�Ӣ�m����-&H� ��Z�1a'� d�d��}�?_�!��	���V����nY�\�,��/��1���k�(�O��F-�6v�]���x��dQ��e�a���am ��q+~�+��}�mv'��e��{i�ENw��\W�Ye<��;�j����*,ꊱY�5/�Ɂ�	^9��0����q�������eb�U
���X7�Rx�<ڨb��գ��6�]�־ݫ��}�J�Y@�ɧb�jn�]�߫+۝�#�ː� DK'�ǁm����y ?�?���{S;�[s��ev��?�U���l��,�K�k�z�a����E�y�z�>���Տc��'?�U
�������f`k���.�O:@
z��w��V��Í���œ������3fUF��H��F�iq�f����%�� O������ )"j�3̑û��c��߆�U���e�M��hⲾLw���ZRѬ���t���l�d�|�l�l�|�t�b�R��R���RÓ5$�9Y9Y�8�s��$@������87��	qŁU����(��6;m�7�3bQTPe�����bub�#Ka�i�N��DEm#T�ܽD9$�>?�f�^������]�_�lG�`w[S����L+����~����&�{y��em�p)R�:S}�'�75C�b��&H�r\	Q�0��ٮ�m�fz�f�*��DE)�NL�)�X7_�Lά��Ͷsͤ��IA�H�T�2֘q&&!�6@|�B3���q)"�N
���Q����CXJ�V ]�n��`�Q���,X�9�,�s���,%�u�|���XW�Vϖ692�؞����U��_�ƪ���\��թ�&J���U�N�C��S����W�_xr��	����o~8���1��"� �55E�T��/������� �/t�d1��;1k���H�m\z�j�a4�]]�tn�jzdWS��\db(�������_/&�f�g"0I>^�$������
Y?{*Z���G�����mfg����I���p�^��d���oQ�%�H{+X\�狛�;{�C��*���*hA{P!=���#�AG�%�!-h�ZF���Qy�?0������|����SΌ��m�[[Y��W�d�x��6��Pb����R5�9~�3�3f�ݫ�p��6��+�/�������zG�2��2onx��@�� ��H�����
[c�sOJ�Ĺ)��P�$��\u�W�|�������)������Ic:�%~��ϟhv�9�����;�ޓs����p?1�X�|�~�|��
���؎'��{u�/��xXs��bճ��S}~>}�jR<'+"-��Sʺ�K=5xv`�>�_���ңKO]XO�z��>6�]�#���s��'��}}�ph�|����������g���L�+�����Hs�ᐞ?ynS}u��φi���Mn�*֒-��`�2�F���p�W_�~���c��:��Z]�w�q��F<�R��w�k��y#�:��v���v����Я����x)�F��ZD�t2e-wh%�7�� ��''�n�`1&��I��A
�J3]���e�����˄68�]�dkZ!Qֲ��rw��|'���%j�*m���H^5"Xe�7۴��L?5H������]#ZT$�WM�!����M�����`����v2m��'X*|��+%�X�c�{ౕìQa��U��̈́6����1�*�JZ���.�8���li����I�F�EV��)�5�+kٖţ-��	
�^��NM9
:Q�hʄz�-t���r�k`}"��]7�Ga����K�ϰt1�>s����ek4���sן:�8x襅��3���"_��x�ɷ�:Y+�U\;z��ٖ��̼:��൧�=������Ef�^��ϋ���+�����ln���<��|'R�;���7��X}��O\�}���9|��3g�>TZ=��{Ѓx��o�o=���/L��е�,��>/�:�N�x��3lT
�p��>!X[)�c;��S/��=��Û3�[On�E��~��o���E3 �������z%�̻{��k^{d�q$l�O9_ċ|�}^�虳�o��"�����ޜk�|����қ��?~m~����8��.���*F�7����F>/����ap�C|L"��E1��w`�H�V2.+o$�j�ks�ad��%B&��JL͍�Ҍ�=tq����5���G.�����;�Ł?{�&q�+�	�^w�}٥�H��^��}
^���N�~9��J�>b�@t$ix-�o���m|��<���i�̷��_�H�+��/F�:���yO��h��̸H�.Ek��?}�������V�7Nf�x�q![M^-���u����suw <\�z�+��_����r#�Ȼ��W��\�8�G<���O_b�����ȵ���~�������c�}�qPE����ԋO/�-����ۄ,�~�r���W�\�x��IQ�ӯ�E���k����<��қϗW��7�"��ߞ<�����f����k�d+ך}�7�|�M��߸ݓ��L�<�i�b#̳7|�Y&�I�z���������k�{�����=��#��D9Z[<]?|�1ʹ����O���f����۳��W�"��ϋ�̼���;�?ۛ�];}�	�@M���'@�����{�G����E>{�d�b�duo�e�0\O��X�zm��^{��W����m&�t������G�O��rt᳟@]X�N����C;S{3;3��Y��~/j�O�X�EK:驷{��\��?��X?{��'߾MU�O��tx�,�W�auU���ӥ��kv=��צ_~�b�l��e��҃�XV�}*	�vǶ�]��_���}O�)���H8	��#YV����<���m��-C��Qxu_?�_xk�?>����e�c��g\�K;+'k����F#ڥ[�]��UE҄��{�J��Ѓ�SH�1w�w��;�O,&�~��+�0�7�~g�,�">��5��2&>��޴�m����G�l��?'[]�~�Uh�ۆv�e��fNS�4���U���ݳ�68�Uz4��������o���s�(L��� ��}�b�������!��|�|�|is�t�|ygvk~�{��rwc��q���
V�U��M�|�*����d1��Ʌ^����o��-L9h��v��V��>\�X�Ɉ��I�c"w3s���sv�;ÌfZ��u��˘�k�Q�U�S�3�?�}���y����&`�&� �aI'�2c	Ѩ�-H�oQp7?��K�F	eX�q� &�%^�"ՋJ���Y��Y���9�LL%¡�+�|6�I�?zi/3ܙ*q'��uВ]����`1�Xc7]���%Ƅ=���J��c��u��XYk?S�7hG��9╸d�N��~�u�'[���N�^�\�f�wD�FFW%]�D4�^��<ٿ��!f�����H�nr<0h,c��>,Y���Q��ڨ�ױ�1_&�|�F�:?v����o�4����4G[s;�'����%�Y��BC��������_�>�qK�^�O��_��hVx��7�9���H��f�e"��U�9����VЈ�z�1�,�#W��/�3;�N�dkۻ&���y����@"��=�ˏ�XF��&d$�������JQ!��c��Nc�TI,�7*��*8� 
G�b=_?W<S��U���l_D����з��O�y�x��|I�I��8\A�������OVN�����A���m���~����i�o���p}��O��y����E,�����p9n��\p�yǂ�8��Ň��'LXFυ�ll���l\��Iv3^���19�-�+����ԋK�����^	�ݍ���~���R��g����K��-ûmA������L� ����.��b�BU�Ij���3��E ڝ��37�F�˧�4��(�:\�{�N�?M�<ذ�_,�7�vZ8`�K�lݲ�=��؜�!d�'��*I���2�c�`���Ku�.������mK?ٳw"�B��R@U~C��1�b=VU�pF��k�z���cmf�&�Ј0�!��&�Q��D�a�<���L�ⱷm�B[���Tic�0��Jp~[��2t�.��G��6{^C+8D���6�r������ĄH�5JZ�q`�g��8H�m�"j~wB_X��wZ�����?gB�ٙj����Rh��6��^����p;�&�%GJd5XL�3�s�*��Q���^�SB9�bY���9J؜�w� ��0�'��L�}E�����$�16\���b���c�m�?��O�Q_
�	YS����)�8s/SI�X]��?���y�/��sn�����pf̸A�N�1#e����`�b��݅��]�vܤ�좎#��M���h��˱z�B`q�˱��o��ZL$ᚦ�̓�� �X�Hթ"�yu� +A.Q���s�B'�N�J�y/*�?�T���,�q��>��M`���|f����d���xEW��5�eX��Sicj�2��z�~�i�[�j���VҔӾlU�I����wu_��q�����71ymX?���s��jV?�+h=.�u�:O6�6Ε�?�x\��/�����=�,_Z ��i=K��JJ
w���<�m k!bc}�4�L~�3����M�|�o/8���g�-[ι*/��Z�Z�	�*ZK�����������䡲k��tX��r۔"�h� [\�A���Z���ŝ��p�y�Ց�-����#��8}��X'\��"���K��tYτ+�N���+�[�{W���q�alL�Fo��c�q����߼y��ь+���P[Q�x�U�����0���1�C?
v|�=���4~G�����LI���Ϸ��͛ǚ!�	?r���o]�K��H�0�=!0!��Ń�Z�؛����ҝSw�1�@i�-���*��G/�=��g~�&��(HY( �жƻE��
�G�?����z���
66hW*�8W]����M\>�� 98���8\9Y<�ޜ���HS��2��"'�R���3Xz��'�*�q,�k+�1������Jv\>VK�ẖ�xM^%��I�6�F��U���X�AD�z�+�h=\����ѫ�!OM��M��fF��L���Ǻvw��"���!���*�*�=n��͛Hf����h�.��gq�~����ϝ-�l�\GH��H9�Xm���QK�bi3`��OV�z�g'ܵ�*��.�X���ì�KQ�?ɪ�����܄6x+�S����&���в��6����߆c�W��/��o^F�VH~?�>����8CK���QsG� {��{WgӍiD`��𤝄\�����l/?0���gG/�E�^w�S_�N��� �ME������|zQ�iE- ���ZHE@
4��Tt<
>^Ͷ���'�T��K*}�zi؆�t��z�A��r���\)g�DJQF�[?Ǽ��Ձ��)���Y��`VL�$�9����w�^i�r�ZVg�k��4Y�9�`Ҝ���.JT��	3���+�M��Q5լli���jT"C_��U�Ȍ�p��FA.�옟ՠE-�)�;v_���I�ȟ�c>1a�߹�p_������������U�dJ3���v��E�l[>�MK�S���8o�L��^M�p=Q34OB�Q&�j�j�;�h��Zߞ`��=~:�Ѡju���cj��[�����<"�#��͠��g���B`�7{O�.���d]�����"#O����������T��gAv���?���7~������Ľ�]����췸@��ә�l�!6�wfg��ȱ��#G��������ȱ��(%b*Sp���0�B��L��U��K�
Yח)>�񉊞S<OA�����e�V=i��OW�j�>(�`)��]J����-o��L^��:����0(Rʡ/E�@��!�Jʤ4aI�AVǇK$iGP�<x��X7���bJ5m�=/�wu\��~��[�a��EmY_�z��d�(��b�j�;ٞ�]�*8��o��%��n���z���- O}��9\�Xڜ�D%�=a��j�f��e��J�r��o��vO�	�yTf"������Qx���ٟ�:`͈z�y̻����-0�	��H�m�GB���ճ5��ӁI=?��$����@����_��n-�,n"���������ɺ�G������i0J֡�a�����Wv��9
f/|�p��m%��;�kE���^�_8�ݝ%XP����HȞ��9�2ylNxy-?=�я+d�{���Fy����s�ҫ���� �]X�.���|���6�X�*G:ᶱg�{F��M�"eM�j��
��l�^���F;�c��1��*���¤���\b��Z|��g;)��`#Z�#u��Y���br~�S�9uc�*�_��D�D��S�����:�����5��g%�����1l���2]%�O_Ջ	���B��R�B��pLHe\Y�v�ç�ԓ�	�lt�,هl�+ǠQ�4�0�۳� .�΀{��t��<_:Y;Dx��
������݃��2{ln�/�{�������Ń�/����Ӎ3%�r�r�-"FG�8c�~��tt���*��=�C3���*=�\��L��{�i8.�b�~����!����J#px�f�:���:F�݅��ct�1Z��=ǤU��$��卤𭰨5В�H6Y#�<%X���y?>o�0֜��NJz��6d�/��ف�o���}��
�lی[|�/1yyO[|�܅������~`p�(���~T������֏�1�1���ܬN��L����ކy�����L��̵R�T�<�k�MhCв6\�t�P#.h���e�ƺ0;X���yg�/��'Vߋ��E���sNQ߶��.P�-�1�u�oA�����A��Q�wЏM�5f�{+Z� �<�f��0�]����T_a��Ric̢�S�(�R�g���c��[������'�n�ws-���L	^6���혜����`�aOeΌ�4kz�o�m��D8�N��$����ɡs0�A/�]�H���kr�f��euZI��Õ�q4��	W����Q�Q�5`(Q_�G����I�DK�䴴-r�+��Փ��.R���PB�%��\e�\f}���!H'����&�v.�����w��v�ݛ:\?�8�؟/fn{nkAaL[�ɧ+&�G��z�`�h�x�dC,����ٕ�zF+F+!��J�e蚺���i�*���6>E�3r���%=fG��(�k�R��l�Z�^jpQ��Ic�rhI�
��7�_�);�^��Wg�*N�Ƚe;3���|�����?�����������z�l�lF�eg^
b��k/ˠn�5�D�r.{�X��ʷRn�+㴋$Kc�D�B+��9J�'G�_�S0��Mﯛ׎V��x���Xf~;�M��[C�ӟ�
s��Γ�S�D6/�--�,���H����b�����;3�|#\I7-07E��L-�0�̓l7�aӿ�������/����$ؗ0a�I1)"R�H1U׈"��9�m��jT$]f�����x�2�z�o�<閩cm��0�a-s�~�s!�ѿQEs�v�vU��,�A��:6iMn���K�l�z���6�0�5�l�ҡ��N7,�E˚E�p���t�WOfvfh߉�bͰ�'�|�ߛٛ%��=����9_2/m��H����?��d�d�p�H��<Ƒ��	#S�k�F��)S���)ɁՓ��W���e~�J~������ޒ�8�8s���"X�)U"d���̶1�Z>���F��Z�	I��M�$�1��,�j�b�%����#���5���-����R�irhђ�����m*}��L� =���o�܅:�0��]k+����ܐ���*3|��PͶ�d+��r��__	�V���ˉb������I[F�R�oiY}�n�oh��RL�ᩆ�R�J�(�*3|�7^��]F��O}���v7+2�e��u���V�e���I��X�*I�v<�q%BښߜߚߙƼ�an,&T��)�z+�;��m��}���+�����l}�)9$����GS����O�F
Zt^3��h[{�hz�!g���K������s�i�T&�]�w�7���~$��d1z�#���~`�~0����,��%��t��"gO�G����N.Pn����~�ӸbX���x+�	׻�ߛ������L��gt�bt���HF/��lH��s���]=]��Nf�/������M�pMoq�,��f�<��3�ف@�4G������t�
��1�kf����B��$f��V/R�ݞ:��ưt�t�<��@����:��G9����Q:B��2������һ{���?p�h����<����N�L���l9`lO�/V/�'�.�˸f���Η�W/�-�y�ё�����܍p����%_�l�tݔ�ߚ��:�{�ZV��V����:��sf4�I�.����E�b[�X?	������u%��3I��n/l���] ��>��yOeM���d�.�{0��v��5��^�ho��f�cbu�]*Q�'�N�3���5�G��;�؇��-i��R�����F:F��,���&���98�߻D�!�7�T�}�ْ�/9��%��ǫ�=�ZUw�s
��wiD����{1�	�|��+�|쵙���{߻��!�6j>�[��k���l?w�؍���[�6��&67��=6�S�O0��^v��:i{�N�]=V��-�
��{���S�c�6�,�/���71Q�G余���i�GT/���,�B2{taADZ\�Zu�D�+�2L_�����j�ux����_����q�Μ�i��]�䞹����	q�C����>�n���k����4{�n�Q����<n'^��7����W*���AM5N�q/���y��=��C�)�`���8D��c;L��:����Z��;wø����~�|L�L�l9�[S�ǯ�p2�k��0���,Q�d7�.t3�T��D��f�M��a�3X���*�0�1���ݛ7�q��5MX�4���:&��o��3h-��0��q����Z�K5SJ�ӈ�60�[�Uq��T`�X�{��I=ձ&k����Ո�J�!E=�>)o�ep)ј��+S���z���y��赴��C�I|@?~/h�%M�a�Q�T$�����2I��2-��ml][���Ȗv��K���\r�A���Neq�����T	�A5sms?��
�����u�h,�����o����O��M�;�ͺ,U�zu0nq^�5�y��~�0T
�$O��6�H%���Iʆ������p�/�w5��k��	��ܼ��
�ԅx���O)�&�+ vW�.�P�g����_z���8*_� �R쐛���Ec�ȱyy��)=�]��*]{��p�H8���tE�ǫ4C8�ͬ+[%��a�Nef��	�y<㵵�r�A0D��D�`#R&8���~��6j�A��ujd�7�Ϸs5m#Z��#B���:6N����W��ܴz~��k�o�����_���Қ﹋�b���L���'�~nl9���z���>p��a�[y��i���淤��ӕ��MLq�]3�w��ʖǏ?~sX�9?�p��y0�ydD�rH{oq�]G�X��?���=4[�!Y�T���*Q�5��42]�F=��[;���}y��&X"�x-"FK�NNNv������Ѫ�*�D}]I?�u����(Dj�<�^��l|�~���X��~�k�Y��F���� n��b�W�g�]�+�؟۞ޝ�7P'�,2Z ����
�9�A�=�ѧ�D8t��e�Bk���^����߂?E*<�����4�g�,�z>�v�5�u���.�գ��e���:Z>Z>\�ˈ���
�9A�3 ^|枽�i��ٖŕ*�ňD��^'��-�6�c��>��I/�L��rғ*��D-[՗��?��񕏍��'�i��f9���
��� .�V
w
^������l���K(f���-B�arh��K2���x�ڿ/�]��
_%n� ���QM��w�� @��@` �(�y3Ǳ�7[���@�8P���42.��	��,�Z�o`#�����v����}�f��񚚦��bu5���b����>�u怦Ge�>�'ȸ��މԨU�xS�|V�'�uS]��:ro�)�n+&����#*�3,�`c�?n�)l�#�X�2��c+�3��\��戴��>K�l�d�l��4P�tS�d1^�����U�k���w��duY�G�'3{3��f?-����'k�ݣ����t�d�|�t�x�J�?P�E�q�=^���%=��`|骹��7�����6�6�Y8<�űR�A������N�#�T+����&X'�p1R�9���Qu-GK�Z�`ΝoD:,Z�c��<y��Bz�G�^�SB\��+��X��e��٧ghV�U,��<f�������^@Ͼ����H��F�䵹l�E�v��'8��U#�埫̫Õ^
�H�	��L3X�+X�f#`9��٪��a�o��6���ц��x�j����u����;}�v�c��>�1)���r���f��V�n��G����N�H~�c�o��dsc�ϑ�q�d�活-��>Z3��^��.�1��/T�d�ChxV#۽����)۳���=������ͪ��,9�=�;�5��|�aq�]V�bA���/]u�����g@����M�����UV�+�ۿ�pZ��k�^�~M���@����[#�4�Ѯ�߰�G� <�1�Ϗ��/�VC�	�ho`���V��p���2��L��W�tWh�Z����i\p�ᆚf�ş��f�]��8��C��4�����=���;�����.��T׽,'��F�H����O�C��(R�!��ǽ�2��.'��qF�Q�A`?�3�=�7�7M����.����A��(O�l2eݬ3&l���.&;`R�s�+��?���k�'�<竇�V��_w���ផlM������S�SJ�1�Y��za�j��w��v��tQb���D�$��^���Vic�!���JXSԖ�����1>(�k���av*���ޝ��X��͋k�c@A�·��r�i���4�6Ĩn��AQ[O��J5�J)w����>�S��U���M�`�O�N�`r�9��w��jg���yR�����T�vL0���$������5�ɕs[[fg�c�a���6*Q�3�=��A��m�(�;V�ѯ��?0��*���`"R���Zyg�K�Gt����6j�/�49�=K����Z	L�b�k��&�aX���J�t9뷴2����7:rΟ�h�\�;⼶��Z�GT��	+�8G4�~�7�(
�� w�j��yRe%���J���~�cs%��&�C�� �H>�/�])q��\�_ f��;�����J�EE7⼆Ӗ�b���¥d����-ԃ|X��'>�ҿ#�y���Dڑb�FKz)T��X#�I�Y�	��>n��|�V��")hFV�F��I� s�玄q�DZ ��*\�������m4���� �e�D��s@_�(�BR� ��D����rM��=F�'e�K��R�H����e)�[s�l~QeU���h	g�ޡal��k�]�Aҗ.cE�^��F��^�}��޾��;-N�p������i���+X]'����^y�w�#<�� 8Hn�=K
zV-�P$\-����0&T�s&��Wh�M��V�J��A��L��kOCb]����� #�к��x�#��L'�7��l5��0���D��Y�V�������3�0�sb_��kp��v��qo�����"iY�߂�?MJ;_��^�0O�T���6�.т�����`����D=�Ϲ-����;Fj��_I*}�x�ڿ>��b�5��P-*E��N�c�d���tԙ��w����1�`��]r��*��x5TV1�C|B��1�$�b�~�oFZ	��guZ|�$�ݹN�b���7'�!Q\�����)�~�Zy��-���iJ�Z�A�v�[��z;��n*ۡ+��/m!h��*�c�C���du�>bE�)�Uװ�V���M%��%�+�`+�6ɶ^�j��_g
�����ϡ2���¬V�܅~�cig]���-M�d�\��qX��L�nd�IW�׀�IT��B/��:	IW�\�#�U�@oXy$Z0�	LCwYk3�3��_�L��2�IW
���G�=��w��\+�F��Y�JB<7�לQa���k�k��u�թ2f?;*Ė���l+�C��*���+�Z־�m�U�Q����J�������8��p;R�:�w��`����SJo�p~��2vSń��R���p���y���6N�{�^ٹ�	�����w��֌�&��29n}��_u����N�z�o�S��̱R��=��p����/��iDd��O��m�������<ɯͺ:8_UM	\�z��mP.K/����EZҖ#U��ZUy
��r5�61,F��r�i�ZA6,�B����=�!@޺J�ݾ�nR�z3��)*�}�`;3.�*+(�җ_�;���K)VJÜ�cdBE�-�P�6"ƣ�$�H� k?9H���tP��#�J�S
c���`9ݵz�n�luQ��D�$�&���������L��e-̪8o4KTCB�id��l���:1���Y���>*{���/D5�SL��,"�y���[i7%$��?��\Z�X�	�c�~g��5�ǝ�P�(�?��2��g��k���v�o�{i7�T4��@uU��v8��٫�����q��e�EcnxV�\�t��'����;�1������Q��m,�G�f#���t��oNm�N��(�]�t�u����������{0I��,0]D�����e�WwuwUE��H��I��Yޛ iV˂�
���Y>X�y#3� �J�4B�a$d	�b�
I���{{NTfW���~��Ѳ����23�ވ{�=��s�_�#OUˀ&N�h!-(�^#4��#_����*�MrZh��5�D%nV4�%�#���Sh���%`�e��3܌����M�L�4N�I:�V�������/�gQpS��ـ�_�g��1�3-uȫIK�q)���|�`> `5�[�3�T��s�ڎ3��'�����
����I̠����{�Ui�s�&�w�y�E�[�1o]����=�WtJ�[�����G�8���Zl���=!J�	��Yy������p6���1���.>���-�:��o����ó�{�A��w�h��LkuA�^G�1<��p���	ʶ�2��0b�a��}r+�� �����#f%�FJ[��g�T��rDJ	S��p�W�֋ܼ�%Ɯ�!́O�������Ū�z�(��:R�Fjz�O{�҂��l�0�	��o���
�,�D&ȵ�{��z�.�}����U����@11��z�<��㡜Xۈ|(���^��v\�oo�F9�>l��O�V��Lnu��M�������Z��t^le ^�(�����~�6��?mCX:�?�S�z������ѕ��,x��[���C��#�A��e�>HK�R��(�>V�2�\ 733�A�ʸv��%�I�ֈ��a��o�>_z,�ѡݑ�3ŗ	�z�y�o�z�<y�<2��{6��G��w�ά��m!k�k��r�ʸ_ig\)n=��uZd��H��S�����r�,�����M.����[-M�*qG�� ��HO�d�HEc���%���ovzEu�)���\<Q@ѝ�HH'9����HK����DE�=�@TM�ŤUT��o�PRmXU�R8��`� �+�xТJ,㓝���HJs�&���!�֡q���ܬ,k˪�m��w(���iMa�0B�0�.H�
�U���SU9��T�2tJ��A:@_��\�8С�z�҂�@�n2��ed�f�HV��(4�Sn�TG������r����#������j�1��*/!��Ru3	2'.\���e�w�ܔ���G�2����BT]ٸ���y�vH�tȜ2��B�R_�tj�^k�k����X����G{��!Pp��W��0F�^���R�T�X%���u~��}+��	� |�Bc����l�����Y���S���V���~C �j0�A�9Jn�7#�h=T#��X����T�g�1?�A�dNg��j��k��2#�{XI񝖟/f��~��څ�i@� -Z�͋��-���a9K�	nU@k�8��?��̪�v�?�]���Y�-jy��I��#k������ᙬ?��[v����^>���Ȉ�
ٵ%��n��qyv`5��kB��^z�x��;�#�-�� =��������2[���������+�7zm�$�Š?�3��C���ʻJ�F�m��J4�*��S����8���<}��=��v�߽=��̸�$�X�L��^ʏ�y��H���D��(3���y��%8����X�c�O?q�!�����ߔл
�>~6l�,V�j��,�-�-�!��ǲ|���,s�O7tMp��'���'sj��o����i�.�ܞǐAt�>b��_�9�+��Wy����� ��bU����������yb�O�nVg�,�~ן ���K��т�,w�-'��+j�j^c:XQT�]k@E�m��bN�-�b�r�w?�헓������ޝ��L�,<_L�������=pd��핡e���wVv�s��X�?�b%���/n����J�4�������=��oMoM���Am�]���J�)O%�S�JzO�/�땍���ûϻ��b�[OG7Fw�zN��Έ?w�J^�~����i�%Y�fV�O���F�2�9q�7r��������X������Kϯٕ%oܱ�,����������wv&������<�10�3��PY4����k-(����_�~�ٝ����vf+�9�J:Q*"����<nR)@L�}���yc���������g���W�dol����)��	�G��n:���^����Zٝ];#J��+Vr�3��hrm���k룛���4���G��_�;�;\<>����+V2��r����b���mן��7�E������+/V^��,Q��;'X�/]��þ�������Ȣ����:�9@���{/W��=���ݨ���J��+y����٭�3�y�Iz�V2�W�G�l��9p��'��3Ε��Wm������ՙ������6�k���Q�˻���{q�9f�{����U;~��ݣ��w���t�=�*�o~vp�e�I�m�y��}2w|�pt�;��.�����-]��?۹����̓;�)���I���Ckkz����y1#d�:�E�fIJT��c6�Y�7��W�����]�ˠZ���2�1�����^������ùs�o�V��1��������h�o�l�6	q~}r��ɍ�k����_�b%�K#}'�#K)O�m����Z�xuz����gw�g׺��l��y�J����X���թ��lġ���}z}�ƣɇw�Q���+9Y>^|~�U/��B%���l���?_���Yڟ}q�d��+Y��]ٿ{����c�58޴���~	���΍gS�;����7�(]�ǽ/n>�fW7C������x#h�;��pbm<�k��:��]U5͍t�,��6s~�gdy�I��5��F����u��uU���`l}zu6/Ȑ��ûo��FX׹�����h�t@c%�y�J�_|{����f�&�t}49��.������O�L��}�J@��|�=��
d����&wn:��hf�p�������ˇ���X�o]��������ۦ�MJ�km���iJS;�nm��~p�d��+9�����Գ���w��� �jF˓Oo>��}t����3:�߾b%���n=�ژ*�k
0|����l���zz���֭�IsW��6V�;W5���v<��W���<�2Z�]�?���p�ʙu��+V�b�խ�k�{�H��<�\Ň]�AAnL��yz:�&�O�ܞ+c�������ZS��,k-	�B'-��1���>M��O<e�Z��"�.�@�6�K����}5mݟ�����/�g�2ڻ����4�X��X�Q���zE)V�8#��B���<�c�>�8>h���&7
"J��8��]m�ֵvuUk�`M�{_��N��C��������&���?;�|�@��
r�f�i?�/�=/K�\W1a��F�5Y��tU���w&��)!v|�4t�����{��+�����zk�hij}f����W����|�J�/��=�=���At���MW�n����pr{����ل�W��o�g��p9K0�_��~�%��p�p�wo��_��f��]q�hywt����(+���R�a��~����=/o�u=8��EW�d�k�����^�d�����g��NH���g�����塾�23=��H�X�����>0z1�=�*���&NQ��l/#����"�X�A����ăۦX#	�,�-��6���ڭ'�O'�YxqH�X�˾7�Ʒ'ˑ*΅tm�T����拞��͉�7��S�z�Mv�Jw��lM<�a����7�3�ސ8���0�����OfN��t�+�~x���oF
�q��8� ̏&!:�>x�8G�q����.��^s��`d6�&XMIi�UdH�L�"M�>�� �����x��j��ڡ2ɐ�$�&�
K��+�1��4��z�2X?����.�(����%MSU�Wby�)��M�2^���(�^�r�$)q1Y�9AN
���������s�޻�r^D�9;eNVT�C�H8��x)w�*aҞ�h�M�mo|�hm8�"��G���S����ٓ9�~t)f��Z�N������UF:!Խ��m�i�6(�9i�d}y�%T	W#�PUaU4U9Z��d�f����c8�HZ��kT�W�ZyQ�R��Z	r�<x�3w�����gSO$Aݴ~"�2.�>�p)v���Bl��3���н�^�╏��J���'�=�C�W���a �x�+Wxm+^f��)����u��� MdW�hW�[�}��=y1C`c�Cc����Q��C���`�ӵ���ޞ�^1��x�c�v�.��o�2�$o9@5&�UlD\+�1�T�uI�[E��q	����7b��0EmQ��ν�ɫ�o�̪�HB��f�Tf�,&����'s����Ko/ALoN�F��F�%�[���H��5-q�F:uH0%�����<eJ����l����}(�� �/�Ǉ�.���{����N�=b��V��A[y*ᒫ˓FaF�w���<z�/����N����zub�Ԋ��Ÿ�tw���]LA�JNq[)��0jklsiv�W'צ8T&�8��ď]�닒��� r�r�q��J�+�S���$�'�1��r_&�����Zr�U�\zsi������uoe$9^�8ܤ��h}��]_V�6�d5��0k��ja鈬��\�F�~����F#��j� 'q?�'�"����q~}R������ߚ8�*]�F���q)uJ����+:��q�C{��R��o�S��H��9�1�3���1!�&����r�Ί�S1jL�7ͱL#�.�ҏ!����=w�x��� ���{�b6�Ҏ�J�ʪ�|���m�K�]z�����b�y,F{�K����ՍX5d�W¶������^ʊrDJBqyV��Ak^֤-�kq��A�f̬�+�j�7'�&�h繏װ��HNC�	�L�3�f�v����ʮ�p�p<e��6�V������E��&��6�e�E4�[��)�в�FaΓ�V��h6،6�:�N��UB5�ћf���sFy,h;˽���=� �7Ըk��q@�1d���AC +5�m#�a"O	�>
a����c<v�m��6����{���Տ�t�~1�0��wr\@�������$9EN	L�?_fV>���A���1A��Bf_!#��6x��_�_�߻<�0z��|1���,��s{�������hY����Ҭ��:��UF��giZ��2;^�;�7*��ш�K��ح���MNc��U=�T,����:�#�m�H�S�JM��]��uΈYe��C)nw�,��m��f ` �q&J
sԢ�#z��$wD�����S���u��x�,s�0�.'Jq���C�`ίW��M.�|����'�e�\���U$����ml!œIc����DU�>����{�w�j���ޝy<�/�R���P޴���Z�:dH;e	��NuIS�fo����	Ѥ��mL�F�{oQ�J��?_&�k���N�c6(	+�6)�������9��S�i�gĎf�v�Sʈ�7'W�cL(�����)gO�{�'V��`�d��>q��TV�so~�"!�WZ9j7O/���ŤYQU;5ՄMn��e�`�CC�P>֓�p;D��h�R;��h��t"Z���ոInF��D�_�ڽ<�ݦ2�F��e	;X%F���:�^��V#�����>M��>8��z�5^՚�5�]Y�냴���:w�]Ɨ�\��X��7��;5��nB? �>p��.�ߣ�K�c��<���ּ�)�P�7)qA\$S.aS;㹸)\�ף&��:��D�n=�E��ZJy��F��+��
!b��:λ'	�3�.7�؂�ƍLmt�vj:�)ȁ�:
����$r"��֏��N�Jq5b99<�{L�wngk�N��4t�^l�]:#���X�G�FJ����2�w�ĚXx����gt�x�0˾���	߉>�����9�:�����p�s����Q�T����`l{y�Z�$�Ōƴ��7�=s��^�۳ʜ�$+�6�-��2�v~�`a��6Ǥ��̶N�nOI��tb���F�ס��eFȊ��x���X]�T֓u�Ef�T�XM�!�w�g����t����C��c2�i��HB�u�ֵ#êq~[}˵�ͺu��}��J���nс�{Ӿg��۵�]���{oшZףC^D/MDӿs� ߿�!���ʦ`G���<����ˣ�����kC�}[�6�u�O���g��\Ʋ=62�V���^v�.��~ձ^=5���nk���M�����K�Vp�n��w��b��y�eN���Z�pl����v�J0A��!:i��;N7s�����n�GX�K�x%bKTe��*7E!�y���&k�;�yn�82m@�6�EG�A�o|�=���7Ǫq�����<\�n�(�	���v����x-���!�o�o!��w�U���e=�h�*��,���)��B������h�x;v�B�>�1�|�I�]�(�Bo��佣p��{��O-�A�a�����N��o(&8:�÷\���������� )��x�E0�{o^k�[�������4�z����y��ӽ3p<T~��;��=O+���G{~�ʧ	n�m8�����z޼�Ū�&.����[�8x�|���o~�m�P�P�Ɵy�,]�k[�һ��(@�G�c{�P�Ӓ"Q�P�AX���!�B�(�Ĭ��|-�c��������Z�~Ĭ�%(��`�`�d<z��,s�//l̬�l�lMH�-6�N�Oo�l#4��y��Ͼ��Oi8�a�bZ��4�,�.!�lO���B�e�]>X:^ڜX�ڤe���p�x~oyg|{\�n��NHǸ�3�	y}R��X1�ͬNIhR�p(�J��"���"V ׬M�9�;����{�x���i������d�o`�����,>]e'�&���G�_L�Xz8y=M�m=Շnov����{�׾�_���x��[�JZ���=er�ޡ�'�HR�]e��ɵ���GyE^�P&��_&-�aW��¬���������c�	��]nޯ���wU.iC�Sj��nm��Hk�dEy�<uT��7Θ!���P�_�q[��}8\��{�>���!d�
8³��I��{���1��+��㎿��ݕ��=�ln)=X�4��@	��͵6�C�\`���AL��� ����h_{P�ڡ�ɬ��w&!\�_<Y�3�2�¦0+�*��,ԉ))��/�ښ�i�p�Á���T���4��g8����z����1n3աM�H�fʮMqt3"�)� ���3c�&�}� �=rI{��E~1y3���.
��뷜��Ћ���[��<���՛O=}+y��oz˅Z�pߖ��<��\�2�a��;]R�%���deɑa���+b�����	-J	i&RV�d&-╛dN�����N˷"��?jJTE�ma��H
���%t⟂s��OS���Ss�1~E8�6�<B���!\�7�4=�/�&�t|LA .q��� ʉr���-��"�/S>�7%6��A�["�_;�at����)���m�F ��FѪ�%)2��X���!�_��,=Y��M��2��bF��3J^�8�՘YHRᔗ���(��`��v)���y<���}ƿݱ_�9��
o�*ĸf����s�8,�������ҁ�;�2_T���ٹ(�Nh�Ck��qvmw�dqq�&��0�ڜ9��ũ�)!4;���p���[��)���xZ��Y+$!r�\�N���ơn&J����!6L���;:�䅌� f�e��St�]zQ�Wt�)_�K�u\f�w��ƿ�F���+'j�f~�*ɢ/��K�ђR/؇s��ǋ��޳����q�H	Lrj}FȬ�k����Ю4kOf�&�tܰ�80k̻K��F0������c�ʉt��N��`Vn�`|��<�2m���$�x�(�1}2w4�ŬO���.;e���/�k�G���z7!�3.4��
�zvwtonM/���nsj�"��3$���e�}�g���܌��;`����/�S䵻�}w�{;��zOZ��("2J��b}0JKR"Z��u�����֌t&jQ4cU�E[��U�%V�TCu�Y`���S��뭌$E:pU1�Y�yś'S��4+�	V��d�����&�֗~쫅��_k�9�&��xvoIk��b��p�x�C�/�*�Q��o}s��q����%��wz���*Ѧܮ�*u���u�Yo5ZѰ^�;��?�S�Ͻ�%�[a\V�N-�iF��Z��lh�
{�8eT��9�iO{"�$�j�ܢ1	8�7��Myh9R��Ok��{������)�����M��N�f����9��q~}r}j�8c��HZ�hmZ�oz�k�>��%��9_�7|����6�#�*�%z!CP�!m!�ȝ�+eiMJ;BO��f3:���d�����k�ŦA2��c�ۼC��xp���<YOU]�VM�)b�d�pUkV^<?篃�O��`3\)��T��D3��}y]���d���SAm#���;��7
�EO1aU7A�&a�_O4��G��̼@�8�`DJ��K��-�j�N� �����"��ƄlZ*��Y��P�}����]���z<{��1ϡӿ����g�Ѫ����)���A����){�e�|Ɋ��#(��ڤ �d��;���~a��Pś
9&F���t^�gt1D��/{��|���A�2�QJ���(�����	D�Y���V�0c�p�K��9,=����f0熳�?ͣK_�_�kg�T��uH��7�ip�3b��"C���a�_��e"j�������S;�Ȧ�X���q�BHw�89��ȝ*>��O���?�aB�="����M�r\�<�N�	^�q9y8�ED�\��|�I\n]��$�t�5����c{�uȧ�H)�r�<)1-.rd�GKt�j�9\����\����+���h���ɝQqe�`�h�p�x�x^e:���Z�_>�G�~<�>��P>�F�A���W����O��W��uUnC-%��j��
���k�,"Fh$���y8��ָ�9�5}�t5�E�E,	�c��6�<����~Cʭ	���x@b�*H��
NHlOm��D���������*��4�H�p<�x</�/Aۛ�>����(�JY_�GzW9iQD?%��A�*J���"�M8��y⇏��k��bUy=�Ch���D�`:d���);�c������X %8e�3�M����&V'�a}ruz}lm|ub�>|?��\���`!��揗W�Wl�M\��Yߟ=�dV�Ec�h^�1����ᅜ���hx�+=���g��K��π�
#K����B��=�����!2�<76~���(v�����7���[�+챊q̰�/��F��	`=��,(򒔋����#Z��c5.����E�X�mpg}�p)Yr�݈�AI�Pfƕ%�¯�s�%��zp�]?��>@�s��}���QLq*tGH���`�PK!Ɲ�!&��W1�q?��o�->U;���:�k:��1{�Թʲ:�5���.�3 0q��;�a K��P�i�^�d	��5ŭa�����\����ԋ�7�HlD*܄�C�.�Kj�=��]Ո��M9j�_}�
A�E�7�����WΜ,���S: ��]cny.f�Y��)����F��VcN������h�hV�����%\i��S(�)��B���[�ݳKlGf����dt׼k�L�3Z�?�A<	�B�Z�313�*��\�<4	������ʱEl�w��[3"#��=��k��?_Na�s�G�M}N�n�x��l�_���2'�A?#M��j�������{����˜�'?� � (u4r�֢p�lJp�9Rߕ�1L�\��v�W�gd�֓�C����I��3nos�L@/ы
b�[�E��b�4+�u>��]�t��s��x��c�|�B�aS��7'v�0E�3z}z�:� 6F*�<�������[(da [�&T�2���o��vB#��#P[5�P#T��^JZ ����)7�l���o��]=���	iiNd����pYm7T�H�[�惌���w;�A�Kk�6�2���a���+��\�9n�T�����V�@CkJ�4��CnWp�����)�!HL{+I��C�Hɝ�zq!��:��x9��B�d#����K<��A�-�:�e�Cֈ5�T �$y-�)ʑ,����Q'���l�l0V�����_���x�GHO�n�=�9�LEo��q^]���Y\� NA���&.�2Hs~V�
r^ZF����(d\Y?	�
7��>�K�#=���%a5fP�eY'ndV�^iU�$y)� ��(�f��`ޗ��i�i�7�.�Yi>V��c�l�'�Ns�w���B����� #q�	�R�?��?y��:z��b�y)���
��.�ʉ"��ЮT��/H.��X�Pq��o
�C�cu|}�ٵi�$zP���.��l�Pg�����!�_<XQ���hC���P�ⓗ����|Z~j����h��%���%G���V̈�E�$H�z�zM�pp�H�0�H��N :�u�,ݎp��������N� (�����<���!�8R��ً
�����?%O��eW�6zA{���l�(e$y_!XH0���e�y���������X�M�]R�F�qF�^F�T:b9n��~�r��B��ɷ��U�2ZK��S`�R8M�A��ce�馃���Y!�7�|ܦ1�m��ڬ2n�@O�}|�1"��q!��dߺp��i�Og����7�\��}yoΛA�p_QbUb�XN�J�>�{��Ӟj�*��|�0K愴��1Ҿ���E��;.�|K�>1�����1\�qd�#�"xf��xAmQ����Y�U��8��1�miB�U'���'���O�������6�+�l�����a����K2-%�Z����
i��SRFkU@�_�l(��Z�.II��dr~	{c��,� ƈ�E4�-"P����s�����T��جn$,!8������z\"a1�v)��u���Ŝ2�[�X�U�5Y�:��^`|���r��x�x�®�{TXU��9iQX�5_*l�Xd�x%Qո��{<e���>Z�<oz���ᦵ���g�Q�*\zwO���I"F�v���hS����h�CV�e����}<e�7W��	IA��ک��QO6�M���%V�b��z6-�yA�PG̡�++I�g"�p�[���uY�}��$m>�4.ۅ  ���yWZ��C�x-T��.4j�1ϓ\���'���Yy�ɧ�.j'�l��)�3z�8>u;c�KHI#i��x�	����ɵ�-�b۸��)ϳ�=�w��Y�H�Q��նdٝ��ⶰ����|�r~��2-�����ħ$�!�����������:x0r��&�j�b���&!�A�~�e�j�8�� �j�J�rBs����FG��G�YIg�~�QO�5E3^�鈔آ('@G��r�4�-�G��o��һ)藘)�T�6UYefH��лR,c���Z{f��U������D-	��"7X
�e��9ע���|�~����� �6�M�6 ~���ђ�h&�����M��e�)�+�r�V��˾¶�yڮY���� .���L��f�yMk���K{��ޅ�m��ƿ��#�4����*H�PWY݈:����jԡ�h�Z�����g�g\�DFH0^��M���VHb��(���EX�$C�Ă��$�B\���M<^�.䲟���V뎞󿐼��[׽xS��4�H)战T�xSeP2ʝ�E��n>u��^}��}nT��#�v�	�44��+)@��a7g��(��1B���_�� :xٔ0��i2%b|�@�̀�F˫	K��2�������|�ou����p�9������I���C���/��t����P�c�9�}�/9���\��x�2qZ�*O3,9�A$������LC��&���'��il9O˽&����,�DV�
�7w�4M�C2D�G���w�S��m�C��h��Od�����1�_ߞx&ـ��z2B
(��H٥��j��D�O��2�2H��1��g�R��(1󞂟�f���߂s�x�����.��(Hh�UTp�Z���i�"������b@ͼM�S;����¡C�P�Gw���t������y�_o�*ʲ���gY�Ae���%%��Z'�W�?����f�F�2��J��ȫ
�7u�r��4�C��y�u�����r�^��})O֝u�	���M҅y[�b9N��-��2��*�yuJ��-k�	�̮6���(�}�oS�)�LZVL)1���i��2�)�� }i�e��[#p��!�H#^���a���gy�h3��i"�=��$���R�����
���2�}�:ii^��)I�H�Mʆ��6	ho�et�9�ҡ�[/L���xR$E� �1��'
��r�v�C���b]�˓Y7�����"WT&����:O��Z�e��"F�.��p�G9lF͡7���0�DMrG���%~ZV��dF�q!�8"��n_��1�� ��x�L!������ϸR��OnAKփF�Q��:/�a}�;�� �g4�Nh��c��[yg� %�t�ޕ
�)+��xUk#>�l�L���� �	��.�����8y��ׯy��ǔ����3�3�cRݦ�T��p�coiw鄣��]�]@D)�eo�ۖc��%t$-���7�p�Jl<�,�zQ��$2JtΒ̩5�-�ȝ������]��'����h����$�f�Ll 7�:GFdE���IfW���P%i�!� -eD,q:ywҡ�t K0"Zn�~H�-�z8E:��HCU��΂}u�2XM-TRړ�D՛�PD�J*�T���9�d�5���s^p�ę �%�A�d|F��W�Q~���p���x��GA��f�=��UE-V�Vbf9��x>��6�5^w'�h����������ъʪ��bz}���y���ϓ~_W�I=UE�#�e�M� [\R45��C�2�����4.�c�����Ԇ�Ly*�r̢�El
��?Ֆ��SF;W�-EM*s��r�k�̩r���,iP7UM��C���2h��Z®��at�j��ܩ6G2��X�7u(�`��3nJR1�,����y!��ŭ��a��e���i�2'�xXD����}ߌ��o�-�R��������yXM5f�f!�I2�4�_� Š�Hgܡi*���j�ܦ�hA'�`��H�D��6�Y�^���5zY���Z�̀-3pV�=�g�{m�%o*�
����`ڭW4�FUSn�6�ֈ5��p��|�wYB2��I�ʉ�S2Z����e��5�p�mxc�}�Y�i��Ri������Q����Uܳ��1ȬTѠ�!�ޤ�G�F�L��ןٍ�p�w�D�_�|x���}]���£�ƣ����V�չ�O��$"��grs������;��H�27ŚJ{�*o&K��Ƥt��ӗ�&w�HnC�S��'p�%II)|y�ј�,n؆&ڙ}��B0;0|���\��׊zN5��x���w~\m��&)RB�K��I���@H�F�.�jZ�Ê.
�wuR0�[/6B�('4k���:W�W�9�y�������n�d�k���,�u�V} Ϲ���)�M�b tnPLJ��Ce���`S�T��b�����ҥ���Ȣ�.�T4_6���f�:i��I����޲�z3nc���h�A�f]e�-n@����O����c��%)X�Ъ��H#Q�5��E�k����xh_��Q�R=��Y�&ҁ"��}�����2g�~���jP��6�+k����AU�9T�`�`8��;ͬ�Bԛ]e���f�Ii��嶤Yn��~��ux_�WF�'RܪDYeS�|�A:e帕�ӿ߱M�D�m�%�0x
^�]��I#&˺K\���ޡ��7�/�3��@�͂���d=\V�d5�*�/?ԡJH	������Z�n�KJdf� �0O{��64YL�U&�%f�ԒU/-d��(���YN�Q���j��+l��g̬2G�
��i��gŸ�������km3�����"����$#��!��l���%��Sc�#<��=p��\m$����i�2��o��~��Q���Ȑ��@^��\:̳K�N	�DZbKڸp�G;�&�Rrg̤�G-�l�"�(����(:M���N�AB%c�M�!�eUyM�����y�A�Cp�O���.�����`�8pnp�Cm%QWU�͘9d�:������,�lzZ�H���$�=Eo%R��U�I�g�߰H�;�0��"v����X�����!iOg��<{�PFo�Ƒ��Xbc%A�!������YI1Y
�e�8�c�����B)�8D���b�Ow��0�`:T�Z�t"ʗ���ޝ�d������e�c�{�}+�E�^L��>��F�"������S���+��=y-L�
���� O_����6����D�_:�����8v!F�ܮϱݕ��Åݥsi�S;��3�ﲻr�{�
���̎4�r�Z_�#1���/��=�c��HS]V�4o! ���jɢ+��e����~8Ĥ�֯�f�W�v��r`:2�аNs��?�>#(���-�T8#N����%�Ɋ֑,H@�85��<�����z��ŝ	;����r��KI�A#� �~��R'�@�c�h3^���h=���I��ª��j�	�\��� .
�q�&��-`�mD��)�RȚ<��ϳ�F��gt��^a�:�Ni�($������Y�Sp�/�r,��S�ۧ�';�ҳ�&���t7&�}eU:����5�u����'/�ɹ!j���FP�-26͏l�L��"�Ij�(�޿�z�f���_��ڥ��9�X�Dϻ��k޽�.GЌ�>���~�-���F�I��C�~��C}��p}3&Y�Ń۱������\�٥/��"�҂s��b�|�]	�)��L.ȟ�(J�ޢ7�I��>X�r��(��������,�	V�^���߄B^]RȏN��_Hvnl3�foM��,?�)�s��<�r�	��������6u3j�z|�I�E�
4&��_�=�3r���੤#gy������}����
�b�8�t����a����e}_��!Gz�Ju�#еvӡ�k�H�~ˌ@g��+��F�/�#���W�d�������|QhY�<�^($@��xvs���;�3ۧm���x<�oɞ�!�J�p�{�)kĦ,i��EhuQ!@��qTp�k!eEF2�g�Y� �X%��U�c��MZ|��|Ň}�s2�s}c�
)�r0R/G�o<�zp�A���gn��Jv���z2VW�kOzw��J����pfunu|�k�����\��������#�Xw�U�Z��3���哾s#�{}�sG�3���!�!�,o���-g	�R��b%qJ�7v�̬u�o_�:{�?�b%��K������yioa�_>{ijDpmt����	ǵ�ݵ(�w��a�Z'�Y�na�㖰�wѱWKO&p���N��{\�?�;ܯ��h��/�� omM�O=�50�:��:Qx�J_[ߚ�\J�Dml���+h���A���I������3*b�+9^>�ކ�ѓNi~�pi�NqG�������W���g\��+Vr���0<{���Rv�CsY�����C+����G�8�%W�d�������M�������a-���w��޼��x��s�-ɫ6�܋{���Y_���lN�e5����������Gw�uU&m�O9V�+V����=���a�Y�]�%j���0{u{ ���a'�b%ý�K��_�pj������W�T�W�����g6'vF�7�=�h���_������	z���)��y��Ծ9�b%�����˝��6�s ��{�!��Z�!s���m� �Vŋ��*(����c�i|�$��[z�*j(w=�Þ�[��q�[�~�r�;�z�Wg��%ۢ�f���5ￛ�kω��d�e���"k뷷�܃�ؑZ���ȁ���o��p6(�%��"iN�'����|y��݇�gj��+9�?��]z5���\ �����2���15pot��ә�S�
����oW�`|�r��;�Ϻ�A��"hWZ�����W��A�ظ?��z'�'����N?�>����н��gd�7�Xɣ[O'���Bl���zףɲ+'���f�&�6��Y��wN�3�ZC��"��G��j4�]�A�z���BN�Nݹ��-?��r0��I�o���[f!+�Ͼ��}~���R�x�wyn�Y�F��� ��lG$K��@#HKt̾�����+�諕��W�O�X5�(X���n�ʤi��Ol�=�������9ý̍��|���ý��<h���yA&R�;�|�r�J̜+E��(��K�+��=���[/ÚAĐ�����\�9�º,�(#l�����;��5ڷH��N���wU������{p)���`����̃�jcq����ڙ_��J����,:�+/�Q4���<]������k{X�����{#��B�(����.��4{�}pw�{��av�8�
+ypU/��������F(%fzFz��r�Mc�g����A���g�=ٛ�Xɣ���W�F�_�`Ntcb�����'��qi|��ӛ۷����:]}����i2"p�g��}�	̷f����m����se +yr�J���w�^��"�e�����{��%�ޡ����gw6F�*yzUu���Ɲ��������;�Gyh	T��������s�\����������M�1����}��&���{����^���:ܶ#}����Χ�=��3w�*)�j�Ҫ*�GȦ�Z8g���g�������z���G.�\]���Qٔd�o�� ��^���d��ޫ�s�@��q��BA�f�w����w�^��f��A����/��Zzyӡm�6ٞB�&﯍��Z�y�5|o���Y(���h�?X�ZL�� T���g���t/��ޝ~���W����'�7o�@���[����%EI~vx���A�����JW��ѝ�]#]������rVh�����v��>�>8e*�����Nzϡ�~���.'2V�QkTN�SiS������ٵ�ㅃ��Q�Z��2�s�����^f�S�YeV|�O�9E0b�4�F�^a�6l�$N8�R�����|��[^��60��Z�x3A3��FK0�B�$7@��@T�`�9W�����!��!7a�@�-G2��%�١�I#Q�:�DMQ��t��:�	y�2�:������@Aʊ������S6�z�E��#n	{�'l�wOO�H�)%��6;B�t�j1��5˝҂���9���߁�*h���:\��1��8{�)jtd�k��n��b�숿7���[p,<�~�Bf���̣�c�w#��μC��ς���Þ��x��"Wb�`Z��Z�] �p���p\��i��U���Y(d�G�;^�~�#�m
Ϲ|SѺ:'ܹq�x2f�]�P�����MU��S;�� 싚��UqMq�;�3y����wZ@��I+B�����//M��&p��I^��q�q�2ތ� ��WIQ�[�VMUf7��7ح��(u� �^��_�?�3�9�1�>u��k����n�� ���k�{�}�X%��x�½��Z㫵���3�^#[{2�|�$�+m	�ܮu�R����G�Z���SF���&���MR��?OR"K���O�����M�������ji@O���i9BG�ȄbIT��x�K^
t�ͱ��!���ɲ��ɝʒܚ�FZ���8p��Z+�T �������b9w*TQY4YYk���
�9��U���K������;�ܵ"�yo"���2ZH(�.�v�F#��ON@�(Q�]��%�8σ�g�RFc�D�X>���IVβ0/Љp+S�k�$O�%l�h(�	����b�A7M 2K)�	�8`�OmP謫 `|9/+e���]ȊYO�O	3���K�hwJ��b�(���<�I{��'��J��4'ьg��Y6T�M�s��^}vӃ�������+�Ov�˶�StQ�*�U6��+wUua�޽�{��W�^���T�_��F��@Ih&8#��)o� s�͐Y�c%� ˥4:�NS�����ʒ�uF
[�!e�ńE[Q���4(v4�����5dӰ^������b�)����+u*Ý�+DHHd��\E?�s�1�>��R�+��ڲ�m��R��l$q�֡6i+	k��e�U;�AI�A�ĠFb>���*��r��$@e(�ܳ�;�a���u�!��<Up�hL�!�"k�+�j\:��8m����Y��AUa���fpK*Ɇ�.cƖ��H���Z�>M�Ys}|}��x���l}?���&���Bxu>k�83<���}O$O$�����HҒ�KO\EOJRL4T�	.-wj+2���:kta�(���^d�:I6�������j�4���u(��e�d٭���@6��CiW�kT���\͟�PEвr�ˑy_џ����g���up
�/t(C'���pC݌V#5EM�T�d�DU�1�\܎�N��39��u���jԤ)%�b�[Ֆ������/����T��g�Y���a���4	���m���k;���v���ԹJ�R(-5��q[Ě,���,�$?ޡs��p�j�Z����Yn���ؔvu9t�R�y ��"H6�Մ)���UO�ÐNL�P͇�!����<��{z�<���+|��ߗ`�o��ឳ�Q�3�p:k����0����=*6nLm�B�M�z=�3��sL� H&⥊q_�������<wvw�?� ���-G���p���u����0uy��!��+>%|�"��}�7RH�yA�����3���`z|���3��z/��!��m9C�q�����4��4^3I#<$�Y��͉ՙ�9�;�;�Uڴ ��ڗ�d�yd���R�e����T�)���$v�5~�ҙ�F8�[xZ|���w�� �4(�Ԛ��L�,o������g$c��"�ڬ|I�$_ҀoGNnL"0����E�SZ�ck�zg�d��Ҹ9���wf{�/�������B�0����Wy��h��;ո�KDB����,�׌ظ9�3y�p4w<������@;�z��[��:�����Y�ѕ"rAp�?�ՉYL���\b����2~Z�
2d��
bʟ"XA.����P#R�"�ѡ]� =�d܆ �a�e�-bJX�T�n�B����~��މ����ZaQ��3n����`�_�#� ���0��$��@н���߸Ȳ�����w-�d��4�;��0� ����x(f~�;���OO:Qk!��Ad\҉����׿�3K���O�hc�%�l	_��-���b�����1q<4k�3w���(r�� r4�����*��������i<3~J���g�~_��*��6�λJ�?�D��h�pΧ;< �F-O?{"	��ى�����.�O����%&V5T�ȫ��8L��q�yޑ���{;L�����R?b
�M݈dH=<�En�f ��2���q% d|�Dգ�0�lPl�(�S� /�!�q���w(#i�1�̪.G�����Z%�kJ��.�pN����dD+J��/ǚ񦢤*iL
k�.���l��h��7�Mn�Y�)��(�> �g�o�Ѻ�Lsi?ءF.��!kD�J�B�N��c����9�dE���xT��'G�=�J�s]�/{o�Jz��U���p���r����Ba��F7z������}_Ɩr"�:����đlQ�lg���ĊcɢE�f��#٢h�Ix,j5Q�ɽ�{��u=�(K�᫃W��_տ�����ҋ���A��-�O��$�l��m�E
�`rk0����4k������{g3��UD5�#`;:�Yd+��D[�C 
)m�h��qk	�I\DNކ{���s0$B~�oL��#���s�r�������!��az�v�@Ҧ�����?=����)�0�>[��0Ň�&��f((��@�H�]&�Q�̺�qR��u���(�)��-�U�º1MJ�X���}Υ�S���O�)���8� >)O�K�*oF\�Ҍo���m��y*F��<9��k���n��������K4��Ԝ:Z�V�W�T�eSےm��WA?�N��1�u��<����850/�;?,�*�K�R��RHY4���B���Y18�WW�U�#`K����"r�wH�Dq[�C޸~ s�!���p�-�^8\ܵ��ҹLv}�h��q=q`��:L�����,ZF�8qSa%�:m]_�V5jRS�5�L>���3zt�Y��Z�uQ���9�QW0�Z~���V	T�tK�P6HFa�7�S���s�ਸ਼��� ��l��R��cu�B��K��0�F�h\����qMtR���d�z���dE��P�o�������{h�@��Pk���"r�C�T�߁����~�'"��!�Ede� ��O��=l�/�Y�M������Q�&�B{��|=�J��Lר���_��e�:[��y?&v-�/��C���ˏ�#M_7�x��ḝ��G�8C�"�U�]k� h�G-6���sh=����w8�9�\������Ӕ�6�#|�
��<�09�����
^Cle��6�㨜�a*�%%g𞮁��G�Kj&�y)D����|@�l(-�^n\q��RKpʺ�B[A��Ql������7��V�0aK2i���v��-�Ur��}!c���{��O�
��iVV{���yx��o����EOWN@�:���"�\���@�һO��+�.��v����_���?|��h���h���ƽ4T�1��qOmy���zE�G�y����ٵT�48xF5 ����UT4��@�d��Q�:��FaT�P|����͸E{�	��{�Ԋ��%�iĊ�9Ό����w��ne������f���|fR��֡�<�k��!���;S�7�;r�|�n�c�ĳ����dLW�i��7��\��k����s�������%;��9� �Ģa���f������nh�9w�cb��U��z�JWaR��4���y��c2uH���P��̺��I�i��N�x�p�h��~�T�~�[�|�t�zT�tMk׭��
�G=s*,o��8��G�eąV[��Ǩ7,�p�ؖ7�-m�E�\��x��k�}ZK�K����2���2��_ω�ν�oܦ�,^�hV�6����r_�v��4"�RrA�\��,{Aza?��mq��ʭ�1b�G�+�PvO"G^="G.\�%U@�x�@�1�vàҍY�6�W�j6]�����lS~���L�%'�ۄ�6��E�ӝ����Lv������*]�IaSLvy=s��^���! h�d��P�J
-+_��`fBdgtq}#�,��U��\�'�j���z|�{�B�$��C�1P����A�P��H-\@æ�g�.�Z��"�չO֎�Q����v�ra���^D�LC+��V�$��ߞ�f�M�)��F�E�`�P�r�l׎� ��&:t��]�)��)�ޢ���M�h��İ�l��?)4�\�(1�2k�9sCͦ�k��6C�c��D�Y���dy�׈��m��yrM�J���B�p�6�x?7��4��ĭ�%55�?��Ǟ�r��M���Q�"��+�0Nv�S�@�.���5��G��&�x`�D�y����<i%��~�"�)�Gv��T�h�F��٩q{�ySg/mjU����۴�b�5�@h��Ĺt�Rc�^F�@+7�[�<��J��#1����*���莅	~-J��w]����LQ3�gu�K5
��f�x��P3LvU��Xǟ�qI�ָ3�$����>��0H�mUt����{2~����r�u��"�j�Y|k��/�I�q2/my�]{/�#F볱�©�*�j�l�8LZaR|�
,Σ�J��YeOe�*�'3F�ET,��1xVvAP���7��$V [�M�wn��f�#��A����!p�6��JD���5	��A�3n���4b��ؼY��/>���4
�O��a�)�;7�)��M�m����y���w���C'�-��n�|�d�X�/0��w�gE��&E1�v�'�0�a�tM�	�ap➌D���� ��h�^1aJ<�e�aCL�Bך�/�iF\��wng���.���yb�.=��hѴ�_U�u��{�'��Nf����M��,!$�!m����ʸ�M3�N��db���ˌ��rשZ��`)&�S5���"YS���B#˩-���#���8��ĵnd��\1o8� ��Z�����S��<&�����ށ���ΘP����^j�4S�/xI�zn�f��K� �O�q�U�~�^�zr�2ڧ�ǫSƮGg	�֮��?�Op@�x�[)�{�N�b�b��I��x�qN���]�s[A<�#�[����|�o�,�W�Xf�2�,1� e�y�Co�h7�����������ٺ�a�br�' v��B!�E�_�W,m�,JAeS1��+⅘��}%���aҦ�3]%O0
��%_~l��l7�߹Y$�ރr*�ߨ$>��>����e)K
,�G��Y��EP3�8���i���� �gL'�F��F�!4# �
V"�2/��c�ALW���(����EW���P�����j��Q!��1�nza����"5��:|�͌9�%�&w�����M��y�ޢ�4.��)�2ud?.���İ�Ў��%G���Vt;*��#�C3E}bN[�̦q���Y�$W����>5�V;�N���5(�̬8��%SK��,��'�i�rW@P1�s=��l'-������[C��^'�A��A��Dj���N�H�I0���'�GT`O�H����v�F�a�_� H3[��Q�È֟�i����&�Q=�2:����00MLc����$�j�"�+�j"��m�k���S9��
.�&�}?	�,&h܆��
?#�?j�}_pdS�L��oӰ��%��V�GɣC<�?������/op�/�nxoi7�R�Tέ0�(�C܏N�G�^U'͑-�,�7c67�9�H7,��.���)\����rE>{�J�����UY��B���s�J�.�ΐ���*�ݸOo��螏�E43�?(]crL��!�g�����,�6�W?�1�vp�7���We��'���1�/��v3&R�{�Zb`�W�J��V�7l���ƛF��)�匫�k&����TɃ<�Aq����	��?\z�Ըp��Q�4�=����2��w��7u����}b�)�n�mO;L��xKՌao��i���(�X;s$������ޥa� Q�Дoɼ�]�LL�Wv�=z�2�f7˽�fޙ�i��t[EՒ���pt��)��Qy\�ܕ�ƞ����mU�DBvN��l���Շ�q)�i7�r�cUG��$n���)�	V�I�W��8�;W�L������{*���S�	_ّs�}�q�Uv���(e�8�%�ga�S�¦@��GF��
y�;~>!���WZ���'��������8v}g?�GG6*:�ze&��R�f�Ś�������Qx`U�i!%��f�8�>�:,3;	�$�.(#@�+���4����|���O�ÒC�q�ϩ�a��X'��XL�!R�|���m�	$�_R�T8v�f��c��D+��Vt�SZTL�c'�ؒ��4�`�Y��$djJ>��G���c�h'l
.�.��2�:^�V>�Fɿ���b����w�O�/�Z�Sָ�}�Wy��w�|�ATHe��;��
�i;QS�:+D#�L?);=��(���n靛���Ԕ`��$�h�UD���Z���o����ꨄx�ڭ��}��84�J�L7.�Л�#?(' t;�͓V�ϰf��/k�ҽ8�^tZBΆ��á��@[r+��]����0����Ay���"3I�e�T4	6ޏu�-��h��:� �ݦ�e��<����L�W�?i5A�M|s��C��&u�x�md	�nӉ��ר�H��rhɚ�'���G=��X�d�z!ߟ%��w���L��{c2���d���gQ{dU�G��5BӢ��FJ��j&�M6Un�S�Vu�V�E��]���R��Gz���I�Mn��2��
n�-iM2�؆�{���TG-S˶�\�o�ѭ�-�������)�i�7�dF��{��?EL7�Y��Y8Y9[�\��8�-�D�W��J�	�b�V��t�����JF�m����d�Ugu g����c��کn�G��%���W��I�>��\�Z�!��V�����K>��jG�a�KԓB
mi������~�[Ts�����z�ơ�P]З��U)�����*�h߲Q�,�g깁�A��}I����o;d��Sa{h�h�ֲn�ܭ��z���/Hi߱��w��3P*+��W�6�ؕ�SӶ��<�ӄ�0Z�ilpT{ڱi�m;ӓU�w�����x��leV�Z�	�;�>�����m�9����� _X��ڴ59�b����,�H�K����2ً��;t�ܰ<0���	E���s�7�n�%�&j��ged!){���m8�b���W/*e��d�v���1�5�2�H7�8ʓlG�I�@w�7&`x{v�I����K��6��b��۬�U���xV-.�2$C��Bx��x��[V������Ɗ����}x��K��Y�O�W:K�g��j=x�T�����G�G�]z�����oz���v^o�w齮��Mץ���_���p^�������h/����94v�3��N���3w
��s���s�k:��l��IG�gk� ��*�d'��x���釧��v�C$,;��9D��0�>��M��g���]�tVvm_?��q�Vdi��a�+;1�㴠he�Y��W7�t3lz,��U�:��L�`�6٠�O�W�,z5>�u�Xq1�|��2-Mc0�C����uM��h��է��y���5E<��7�o�0sgwN�i�΋G���Pd�>%V�~�w�}������������}��~ų�+;�aK�1Ēh�,�V�Sz:�ޞ(�ڳm-]8O��m�������l�$x�;m��Sd���3�'���;�(�������͌=��%�Ѳ���Z��泓���>���$�T7YWXE�ס���gB%��8�k�RdI7b�d��2x�V�ev�S��#�:�ą��UaKX�Ve;Y�X�>�$�¤~�F�O�R�	7ϙQ��xuF��Hz�o�������+_S:a1��T;٥ۉF�F�ɖ����v�g>��Q`'x�R:�V��F���~��8�ν��?M�9.T�c��4�<�P�xXf��o����S�K���A��f�;˸'�u�<�耺�+y��tS��7�6���5�ψY$Չ��#fVt<G�X���w�ފ����:q���Df���swu�JO�S�&�i�mfwn��ܹ�f,p|�TF#�>�C�wH���w�^�b|����a�i��U'�j�V�N�cV��┵ԟF�t��g_3QD!����K���订[��d�U���(C�jK�O��f���{��s
tT�|�����GD��a/Ͱ�l���]�R�v���yt�R;�y���AMn�e:��f&V��8�@,s��9g��䍣�X3(���ELb�-2u�uܣ�~Ғi�9��l#�C6�|-��xW�j>)S�v�������9��fqdth�j�ES쏿"S�gu�i\�F�quT��,e����ޑs��w1���Cրz���,4R�����4C��\�Is_k����4��~�������ϱV*��g�3m�A8�d7�Uڒ5�#�J�<����Ȉ�ѧ�
���S�z�m�3�c�3;RN�M"=LY�Vj���U�f����a���Ё�G�V^]�m��-IFeQ1d��R�x�,�Ax'F�+>l=�O"�vCD�lvi#ZF�b��:���7���'w%d;��:) &�ѩ�j}:�ɮ��A��/�AŽ������#��ek�sU3�m7�f(�a $���L�s���^Ϩ�0.�r�j9��ni��^e��T0i����F6�r{m~��K����.���| ��G.�Op�k��~�!�x�W��,�[v�'������:��߿�w�V�u���g�g���XR���u��Y>r��O#硝�^hgI��ɥ��_�ꗏVu΋����Uqo�d��4�X1�q3��T-ͪ�X��6���,�E��o��!e�c�m�a$��`��%Ou\��F�!̲q���%(�7e����ؖnƬDG�����ilr�{�N���fk�^������y�$��C�&f9�w�/�� e����Ja�O�w�OC$�{�I3[�u�Z�����$kek�z���8�%�L}�|JfE����v���X�-�Ҍ�B5RPgjTq����`��4��M2�,�j�:�Z��+]ծ�3L��ݼ�Br4K�$Gr
��	;�^�9�v��z4���3'����������o��Ў`��`?}�L?I`�mě&Au3�t��209s�B�8�x*�b���ƿ%��%h~�7N.�B�aiUy��2��%k*F�R�*�J7����E��h�$���8O�16���+��ü����+�°��?��Su����٧����-E+�N��Yl�-90�P �~כY�v{A}�2s�zz���fԂ����l794�6�C'Y˹L��(�@۴P&�Q�4c=̧�04��-����\zw�w�(�Ԍ��A��ف��pX��레k��w�7���;��8�B-��C�paO���a5{���[��B��x��Me�~���bd�G�^�fw�`�|^�n���\�����\���sPG�^���[?m��a�GD!�������a���7�������o'�`1�ì���~=��z�^�K�6�O׎V�W.��W���!�95 K�p=�և��hC����Z7����� �r��P�f�Ω�!�$>	Y7L����7���
��� ���b�֋��H*�o�������&Oq�h6� M�#������b�>���8�>ޏ�ӜҪs*,)!ɨ�z¢q��R�����:P3W2݄e1,�5>u�r��ƥ[�n�/�e��LR8 ��F��n�Qu�l��l'�HE�B�j�C�ߗ!�e�5��)9EG����VnG42VE+^��L+��T�������4Ť|�ŵ���{q���{���yU��AK���K�mo��V�:�ZW�¤�?���(�ߧ���x�(sOn>��o?��|셕����~#wg��k�<q��~� w��j�>�'s.�S�X��4�s��$�Jp�i�{��f`L��Gd��矾���Җ���P:K�����z�znR�O�������������n�H�9.�l��=p^������н��Ѥ;��`b�<���B��S�ބ�cD&�9jE��	�C�-	�j�\хѩ�`Z��5DX�G��?#Cl������Ľ��vb'LC�q�TP�T75Nm���XS#�E�R8� �W<���o�⴯Q1Ɉo`ۂ���څ�b� !;HHꈞ�TMrx��Ɖ���g3���K�S��9l7	u�7N�^�T6�"6�]�4L�V�]O�n˺�K=���>�=�q����hSFUW�sNxeУt�Y�ZWu\��x��u��(�/��\��@$J�f331�`ia��F�d�c2���k�����Y-����e���ĜI�D����7 o��nxoa{awq/HYE��E�?��v��7XxaZ
����㶖������LH�A���i �:o�ڤG���{�-��H�4D�,�� �AJ�t����t�|U�A��_3�D^�l����)��C��t;��ĕ�9zb@Z��*a�x�7��q��|������σ�~	�ܰ>�7|.RV�H-�`�%�7�#��{`p�
R��&�svCI=�<��E���"3PG7Ry)pD��1�ꝛ3~&
ί��+���XzCU��y���lWQ�pM��䄢5��f�XS��x�<Z�<�Xߍ�?r��+<��M~|ݱ�V�ܽ�N��`˯)}P�O���ǧ�ޯ���X������g]�;h��Yv~�}�LjG{�nt+v��&��^�7��t+]W��КJ_?�CI<Z�1z@�Cв6�"�?K���4�丶QT�<Z��8yD�W9GY0�	��xO�6�Hb���@�F�Ed{��	��s2����[�x�:��W�S}f�'��SC�˪�

~|����;HH7��W[� ��9��a��[�ؔf���p����pü�zdo�
�ɚ��r��P��9��4�u���E3T����W��G��� #��?�7��J�D��S���e��%�2�G�;}��*�P�E�1���ARLvI���E��L.�Sɣ¥ ŏ�"�Bz�Y�ӊs�h!g�_��/ާ�+�u}��wz�����\?!.D��m"4x@4I�}���}#�7�sk�(x�:uU�a}�Q���l�Y��۔��R��ҍX��f:�-�0����L�b31��_����d���v�<�:���z�FW�2�.Ck3�)<�K@����~b��5_���k��Y�x_}QaB?���?v���m~��Y~�"^|��%�>'������?z��S��h���p�ȥ�9rsѴ�~FΈ24r�{�X���@�E�#I�Ʋ�P
��gl��Е�>�K�$�\�lL��!Y����V����nP�]�f! �+ &�B�~㝛s���0N��z�Sx���3w�gO
�O�>�]ꑮ'l�k���`��3u���5���㳃r�q�/�؟��2�����_ұ[><�w������y�*��Ύ瞅��_��#�Cm���_ґ=~z�i�п)��ߍŶ��u��Q�뗇F��Tf�����b���W�M��V�|�[����qiX�{UWab싑_�y���̬�����N�SqY^�3K�Ҩ��u^���/�Y�M�%ѩ�MCӸ�)�3�N����I��v1v��ض[j[r��g��)�Gڑ�S���� �z���wd�CJ�c3��b�i�e��grTA3R��lbP�Z�M�v��9}ZW���f�E
ʚ���Ҭ