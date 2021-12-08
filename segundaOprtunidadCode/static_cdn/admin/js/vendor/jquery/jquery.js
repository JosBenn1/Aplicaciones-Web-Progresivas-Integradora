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

		{ê†.âl-ü[/0°¯£l¬â`GÃ{Ú™(ÇËA,ÿô'×p¸¼ÿÕFbAùÀoõ@I’0 Î´x´´·x²àOMn»]+[)íN…ĞçöÆöçÑƒ.“³^n04Æ€ÚŸjpÆ'¨3Óó¶oœØöYÔÕSğ²—ÚxåÕWv^@WÑŸkôü§ŸyğÙoş¨îÜU$1“ÛK6ŸyéxšÕsëì6k§QésDk¿ò–ù“y£ïdñxi{fÃeè%ûÒÑªÉ{°|Ô ‹¼?ïe’¥8ËPı¬Fr”éÔG}„s…H¨@#LÕ4b!B™h.ÍÂš™@Œ$,ÿ¢"¾‚Ò}Şf•oD…Õãk€ÎGîùyOmù!‚h«OÍnO’!`ÇCÆYK7±3»óâX9]ÚóÏ]=_ë¼İ™d¸­é-¸óÖ,ŒƒÏºbôè$bœ‘”ÖÙ-Uùİİ__SÍ5òÃ«W#š8ÏlÌŠ¥‹©9í'‹L=ZŠÔ)v…ÀQıáÕ»âï–Ñ*ÁÛ,+†“‹ºZ¼ö&Ar¨Ì\¼D—t “.ê	ØSæn¬¡+GQ}JfÔk^=ÊöÎşãeU¯uû¼8š€ø¹OH„fÀØÖ„Šz5|MèY?ÒÚ4üÌlNÃoÁÀmÆÁ¬ÂL\ã‡W«ÄC<Ùá‡*±švòÄÃÀa*øüÜÓÎËl¶e—½kVì~£œE?¼BCb°qšXF
_Ôû%ç7GV;F Ç¢z¦w‚8ãQ5Ãú‚fŸ:š=‹$%E`|’CAxd»v¨{À:WOüİ¤ñ ·ş^ËõRKØÇÀŞ‹u½L%Ş·¶B¬¾JHá†îò³Öó>¦ª²i`r=T#ï±÷LNC™všà¹Õêçf¥2<ChútC­cXÔ7ÂÎÄ 9°{sM°Q¯ú‹-4‚ç ­.,nãõÅ îGÇĞ°“'	V¦A°ı$´±xµ?èÓo<Ú4\¯ı>IüÌÿ ?fá5x@šğ…XCŞÈkSÕwgn'<ù‹Í0°óéËÍ¦Luj÷…“ËCŠ¨¶ĞÊ<:w¦XÅ„-ŒSÒËÀ&_mnhLí0„b¨\ŒÏVİ¿Ù{9¿E¾<ëu]1,$Ê1XFÏ4ˆ—âı´œ¼…µ™,%/wQ œú€Ñ‚S¶y¾¬’Sˆ-è«T‰(y5Öà)CC¤!Zİ©N¸LK˜],GË¡j”êLÇÔÌµóõ¤èiC5²-GÚÆQ19õxïµ»“¾Ô 1HpÑš! `75hÜ?Ô£b´b€õ“õ3	Ïãğš:iÙÂEÅPUM|vD?ätßÜÏ4ó}\³YÙØ5st9ˆ@oğ\$«œİÑAWL–ÂÅ”lEOã +[û-êy¢w‘U•q??‚F-+›½LU_£âà
ñ±:]ÔWbíMµÒg§/Œ ²Ékõ8º&9%c%½dOºÕ˜/´HªBû’F?îÇ‘®˜D
d-V‰€2km½©R¤m•óít?%;ö ÍË^­Ğb‘“‹Üé²BûÊùß¸¤±6ÓOgÅw$øÀüicl=jc;ã¨˜îƒ‚?apb|q¯Ìû^TŒq+!—@á¥zÂPFï•A‘3¥Væ\8YPˆW5ÆjXÌE1ò^”²¦sQŠSÍ‚Ç†nf©?‡6¯iôù¿½ğqÎõ¨ô 'ïÎÜ[¹ø>É#7j°¤Ûv9Ó±%$êº†®ª†]$O5˜uY˜!±?ø3¬ô·àKt*$H4: ŠÁ¸ÜˆH‰šè®èÚ\ÁStwb1SÌ–>üwpõm‡VöÊëGas=ôˆZÑv<ã3,^cÀ6w´lõƒA3¼dÜùqñıÔ>ÃfE®Ç`Ä`ìœÛÀræ”kkrwÔ×:®ˆ×5VÄıSªB¹-ı¬Ïî£¼LpT=*é+†r¬›ò¦:ªúõ–áY¾bñÙ»¹^¦µ—ìšÙf¡õÛ<º:í:‡^{[ƒÆ0êH¶»~»×„>ö¦ÕC¹“ÅpÇì¦JL¨±«:Şñ,06ÙPËØ6ö3İd'Ò1ö%ªHcİ|=(©÷FĞhŸÃ“rSÎXÙàwt"eÄóˆUCU¢¢ÊïŒ !ÛzÁ&Õ\/ßÏw^{Ï°urL™(ïEwGpùÁYüÙ¶ÉêeİÀÏêz`32'PO îàĞV3Œ³ÖÈvmŠ9–Mİ”»à7¶-m{WåìÕ\k İO‚‚m¨D¤`ƒ¬…‹	>o„J†š
CæÔ 9¨HÃ.Âº,…X#Ë”`”XZ–V*`ôÙg1'Üˆ1u’Jº“®›éHŒ¾M1µ³KÏ&pä¨©
mø¯6ŞŞ¡è¾ÏYEà	·	\~&­²% ç¶&–¶&áS¬˜>Fs§É:gò “àpùû)Œh%š5HA6âB°­‹I±•õYdË™›V1oXªK6¹Íı|+ÛËøò¾¤ßÖÌÊ$h.¡VZVç^±'«§N
uûÀÂY¸H…¬FÊéNÒ—ÄZöUuŞ”ı¨Äœ„léçzÉ®#`ò½F7ütÓJ¦•ôgúÔûİÊá§im½_¢Y£œó˜Aêgñ=òØºé€Õ[ğ›ÚéNî¡`G xQ/íS­œßŞ¶·áw-Öˆ°dôÇ/6~~\†³½H·kEº¬#%\W±(é^r€§l%W}(£iàÚQù.ƒ&¶æH{vÚæÔÎØ6pŞµi5+0bl•,RkÚıV/ÓÈ{í3G8Jn.'*ÌY¹»1µ6ÜW:“±míYvw¶oô™û°»½…V~k›dÓ7B›ñkËåsáoùìg?B8E¦»Ó<§ÕĞÌÇû«G˜ày´°9NuĞA¶&Õ§¿ú,øóˆ«&çà5»=¦Æ¤NkŒÖü¹tl2	œ,TÔ5(İ`êájÄE(ÅO›ê©œlFƒÆ0Æ:#5µÀíüŸÕ‡å–âU<w'Õ¥=;jÖŒÀ‘MŞBCÕ™ELJa`3W£ëtY­¾¾ Å…ì>ûtšPİoÜ™#OY¯İIƒS•ìş=üÜœÏ··|¸¼5¹6»1µ=I`‰H¨ªòqIc½ÜFŠÄš×Ãl˜5ÉÙv¡Ÿ®À¬xóƒL9äŠH\ÛË^íÂÃ¸\+xª?ùÖÂ[mKk™7«¹m«^#(È*Ïw°yğ:ÍäÔ;I'6]§ù\‡j™°yøZy{AYy›G®Õ|÷…æâØ<zæù{sİ>6_«¹¼úÆê{Ø<qæóÌÍ“×i>+®vŸ9Ææ©ë4ËQåùMl¾Nó)gŠ»ÁaóœFó•8,8§øèë	ø3¯Á—Ú—ØŸ¿ğ­’pÍ\şßßÍ¼[ ¨±†u1!X×¹âıt•TÜj €·AÄùsÕŸÀó½Òˆ-€¾•å7ÆîÎ¾:ç=y²A­Ü[î½±ğ®A†ÏË^]7¯~y{æÎœíôåƒ§ÖnÔ¬^åZËĞÛyRİÕë4Ï¼—¾S7hí:Í³®ñ·é]l^¿Ö2|ßøşd›7¯Õ÷×‰¾®ª–å¼Vßï&“÷°yûZÜ¢õbÓ¤n¡ÎušÏââ¬Ú™îµš¿–_haóŞušOÏ
á÷ÔtÕø›·‡
º@Hè‚Ìøm>“'0”3ıT/ÙK²}‡GîX× "ÎÅZˆGT/ª
Æ‚?×/x¬ıD-æ"xsÇÖUcã@ƒÆ°6±«Æ‰å1ƒ€+xÓİh#è4”B¦¬gõ5Dã0h”§Ë!Ñ*&*™NŒÀH=Z	—(‰q…T³Lu¬iôãç¿%`_B•L9°Ë¶¾Y&@hœ0ÒYÀÿõX½àÍùMl¼ÁTÃeƒˆ‰”è‘KÈpá‰†sö2hÎ#ñ§â¥gV@ÑóÊ>È,ƒT1\Lù­T7Öˆ=äöU"Åh9\Uƒ­‚/ÕÎ*D)YŠy‡i‘«”0ü‡LïÿêÅ'ÎÔ4V/¬­OR Ûä/`òœ®øş3ŞOcÜ^üp»\±¢^$kˆ€lSëp§e¢’ñ[úqD+V2—•îaÿĞ1>qècœ&åpá `‘„¿M^ë‚Õg\<¥RÇQZ£¤¢XégõÜ»3¹Æ¯O®97f·\Û³[âı÷ã»¿­şÊ_â3ŞUŸQ>œ<ÀP4ŞÂÑ®íiDüÛóïÍMm-a“v«L:5‚/‡Ï+¬m»é\›İd©±µ10ÂÇ7Şoâºø«‰Ï‹¬T²/OAßXbúX9–Mxî&<²4½rºˆ˜K;ÜÚÄæÁoH[3»´ëş{§jR|Á·q%&P`4å™N¸låû¶ Ö 5ò]³ÛäQÓíşºìKç<)¦¼…^¡)GŠx])XMˆ¿£‹•ËU#ûoŒ0KœA­«é9“)…ZÕjé'xKÀæ3wÂ’Ê{ÿ¦Ï»¼‘h„šönÖíèÚÜO®ï'[V·½ï Vºğ	fëùxè9n$J¡z°‰ğf`b7½¼×Ö·µR>uL¿PƒÆ¿<7HkÙ¶Ãcj:>È…„P1Z‰6¿Şc.ÒN"dïi¬·¿öÔõ×›«¨GœÖ &úñ¾‘%d˜3y:7H—N‹—¢Ò(êYbrklkfclmy7€›èE0cµæ8Ø«˜v¼6·Îc$ìQùpùş{–~.ùâ{é:µ2åü -§Z0“"Ö}'œt9!P¢AˆI	¤šÏö!'NÜg>ticÌËéíIØ‹j¬iIq”xDé´ˆ~ôóPá0U§Ôß×‘>?¹ÆHª,qÑÏ®‰'Åé­Ë'†2YŠÑ*YIğğS¹¢İ¤ß
¬©Ğ)ÔóíôE¿úpÿØE©7ş±sìöØöØ¾goÉ$®Øj–™¡9KàPÙ›7{ì.æï@›¯Ô°aĞ‡KÇ»¾úOÅ_¿yÅÉ»#ÔÀøÆÌÉ‚qÁ!ÙZô‰r¦gr›š™¾Õäü9,–ÒJ7Í>‡ld?m¾F£GÃÍ5ìÑÇè†kDIçNÌ^#°Œ”ÇÑ)øsŠÑmáãÅH;«Å¼ÇàgZÅ³R1­N¼Ì†ÁkùÄg[5yé±],Æã:i‡ç?]0yG{OdÓê¾Ûô¨-'m87]·Y&ÇH ³3uì=˜”ûï'¶àõïiØ,´BÕ.ßuì;HÕ·'mOÂ–ã˜±éã%“Çì=]ÚšaÆw8ËŠÍGƒ{ä;ôz²M¤D½´áÚ#ù[â.oâ&»ÎoLoÍ“âûï—ß­ş¾Æ¼}¡N{Ş\z–U Q§ê‘RL ½ùV¨®­>‡Ç.§š–‡ÚãÙ7åI,<ÅÁx8c5Ú›ì8ü%ÙJvÍ—ÛWcõpÛÔ‹³W¢½ü +Ûe#KóábúO¡²ô.nãáÅÄƒâÛZÛør¹äË£÷Êp½½6¾ïµ,Ø7&Ö¦åÙá1yòÑÜÁ’ş·zöç@9òî-ïû€Í]©6”¨s¤6‡Û0ûVwÇ·'7¦6¦v&waeîNlÏ¬MĞ¬#$Ú…¸:qŞoÍâÙ |îÔÁw–€]òá¥‚U#X%ÓN¹3nuœg8‹ÛÈ’ n¨~ÊO ¡Ø[7ÙÊø2]Ó Á3JrúF3{½L[Í_ùÔ5Z"k4©éÜÉv˜‚Yj"FñÄ]ôDó?Ô q¿ ½ÁowZÅì±uM^›×†]„¹^ŠÕé3,¯AC°ìJÎcÂÌA—A ¦3ÀÕğİ¯A£jeú6_~ ªæMËV®äiV¦H”U%ëFĞ¨ËñUd§/&1<ÌIVÀÌl¥hYÇ«ûo¡¨Õh'	ã¨çcPj„ÙX=äbœ1)âÄbî£ÿ–kø~Ÿ™<¯‚‰àÛãGºhnkr}#¯Ààò€R1ƒ Z˜Ÿ²5öêÉå·0Àe«lë<ããÕl?Ñaí·ìU7ø=uı~§†gñ|œ˜z¡mÄxK/°²ŠC)øìR¸ï'Ÿ	C$¿ûÏøg¿L«}f	×÷¢Ñ»·bô«p‹'ËFÙè·ÀÃëp[KÀÀïL`H5ìÏqÚI9ñ[‡r€t¾GãÙ‡ı.UC [9õÅæÉn¦BÊÙ^²¹ŸöÚğ¤ê_iğØãG@f‚‘I(À­Yd÷'½@×¯ìŠ¦Íc<Ä3«¨¯Æys×609MNƒ¨‡5J–aÕ‚Xsø,ß?âT§JÉ{„‹WãŒ{5Ü`Š´3RK”"òìôï4hüìıè¶ÉcQ²MğKG;×sô­ÍlÆ£™ê‚ŒÇ÷£¡‚}.ĞèQJ¶‚ z¹Z˜W¤bÕH'ÛOw>¦;\TV”ÁúÑ‘æQ#k2Â…8KÏêÍU³Õ @5E’¥_V9È Q•"U¦’QrmwÆNKz~]³Wåd?>‚š³m‹;évô1KW&F„um<©¾Ã«F]ıÄUR±ƒ‰˜è§J§¾‘÷ZŒ•°L[7£0cõ'5v×õà³æmJ• ‚AÍƒ¿p9ƒqH¸‡Ì°§°:ïîøîHÇ•£Å1†×;A>d~Vcî¿õ‰GËíÇ1<®wé\†	züJsá¾R"Ö®|ºiƒsm†vnLï ”9|ÓÀ­cZÅ˜Ê-áL®Ø‡ë<³4°ğÙ%èÙõ)‡5…ñŒ¯¿ĞBÚœÚšØÛø=¸çÏiŒËP›îmáÊ…Íc‘I'UJ¹³ıd	Ä}D¢äPrİTÿ!¥­J•Â¼Áiì€éÒ1*¤•ìƒ¤BÖ ëş\G³&9^ë$¦6&óÒÖÒ±ßá7:õ‚#bf›§±–Úe¿ ¡>_¶Ã.«ÏC“Ó÷ŠË÷Êş¨„ZæVÁ‹‡‹Ùˆî¾±›êšüÉ.–ÚÑ;™FÅYu5$èáŸ™İÉCÅ„u.–N={£İêÑôöÒùnÅ_Ô`ß~Î ¢*2,å±
¨ÜZÜ…zH°Áævx“mûYe¼_Ò 1ÌÅ¨0p…ëC1,ÅØÉ´³mËxírZ¶
*[ù_6¸É.«D)V¢ÄP=ß5Âµ¹A²å¤ûDùFĞ)Peˆ#…Kñ]&Y}
ÁÑ0B™Šá,
ÿW5hüğ‹Cã²šóÚk;İNzì
(>{3;H·0í¨«4ş“qqÅúF´îØ:9oÊck¦JÂrÁ
Aíüºa]—ÁqÅ+¸NßˆTÒŞ”;ß¶øì èÊ!–D/Ëoh¬ÙëâG7òİt`–¿ø}ù‹WÏ¿PGès„ô£•ŒÛ&Ä	.Zuíğ·­åèÇ]$èWb—w ¾¿é»dãàå³yL‹0{Œóû2ÁÂïË×~ÊX­ø)©µSCåy¼ŠÁUàPM¬;—ì˜<ö ˜†Õ\Ë¬˜}&9ÓKÕúäï]èŞáçÙ³Ú6CE-!ôGÕ@Æõó»ëçÛÎ÷¤@9uî‚?×4yŒnÒåøÀì7°¡²¥Y]I]ƒ¿7b_×óğT¦NŞgîÀ
îFqVÇSÅT †Œñ,Íà3#h8Aİ8À|Îâu‚×qÑrĞiÂ0€Åoò¨a•¿¯AãKÎ3õjºR°f;ob½dßá¢qQ_Œ–¼×áI¾şÁˆ½p`İÿi,u-Fş¿ÿÀ~IèŸ9Y=œ‚"(Ö9³f±ZœyÅìÛG$ïÿş˜ƒó¹>ÿÅöQHŞ¦<w ­.ºÍ‹›“ğûòµøsÁ£ŠşäÃ«aK¿,Œ·p²×…ıw­Á§_<|æÀtüô.ıÆî+7ŞŠ½¾øFâõàmkëÆVş‡¡åŸˆ»Ê/U×¹-|¸n;”L9Ú <hÉYå|ÏÔqfŸ¦MpQ¼\ï«¿íAdV.šg8ŠİÜW³ù—OæOç®°01öÿ³Z>Ñ›Úv/éJ‘N¡‚‹¨ê¹(«sâ	>$2£á·á÷GºäÌçp°¬qÒ¬ílÓÚOµ
¨Fájêç:h»8åydu³cûŞ½¥CÅ¦Ø—L>3–Åğİ¿ztåÕ”‰TG˜áñ0Ş¡œ.X=ğÿ<Xâ«`KzÌıX•óV·CñÉ¶SœrfÙÑ±yrL%ãcXCÕ vTW#ï(èE²ÑV¬ß†Iè ”äëL1*1^sÀPA|Õ£¥AÃ)·İSh™å¬ßæ3‚H k¤bì¥:)ÙìI"ƒ´ŒÔ~uºI)µg—H6Î%œÆVZÎTÀî÷gğ˜ÜòÉÇ‹¹ÄWí‚aì)qş*®ì+bPwÇ7¦0RğhÁäETY›Ç0Ã8\ÆL°	WöVvÇ6§ÖgwÆtx¸Ã%ÅéYS`ñpî`~ápnoy˜Ûw^¾Ëƒè¶K˜¨şàÎÏ8\İ×4¤ï|©~¶—îä»™¾¹òÖCŞÒËµómˆLY2T""íË·“ıD)>°6ó¾Œ/0wR£'ûIÉ¾ï6•u ]Ò•£=!\7ÂU¸S…jĞØ?„6OiDô½Ç›ìá÷?ÿÙ•ÑØ—H	Ò	0"0?æĞe¨ığØ|`ù¬²Åw¸ÆşôîøŞÊşª
×óŒÆSşÔ­sf›İ[¨š9Ğà£üÙ‰p”ÓÔ¶¶Áé«pŸ7?yµ®âÚÑnºgêF»9Îƒ¹ûö&Ø5uÊçhWì,ÜüY3CçyœgÀ`7µaCÊ¤¨#EŠeøPÅàŠ:IYu½<‚Õ”âÅ$X™¶Y¶í`îÆàÚh)‰HŠå/âµl¢DqĞ"m^sßâO+7UÍuÀmæšÉ¦¹ú5hó¦Æ¬¿õÚ#c‚ÂRÎ`5WÍ6³Œ?ç5µ“]‡ì¥jìqVÉŞ=[%(UD¬jùå;3;ãøƒ§¸˜k>x‚µ‚õŞ1äLPÍ@ğ$„ÁA‡¬# ë)½÷ÉÇ¬æfÙ×íêîÌ±j´Ö9¿ÏNÉªA¢A»&…c!æ"Ë´DE7«Ø=*4Ñ]ùBg–ƒµ°Ë!êt-1\´F‚õE‰¿µUğëÑ1/h<Í×Ü@–®‰ä¾xgJŠˆéÛ³Å»c|ZÌ´“q²øÔîÀêë¶m¦‹ î’ÆZx€;vy/ßs¸ĞÁhÁ Ö»·€íb‚¢jK½vaş‘ÎW¹ÿçÜ¿Ú¸.ô÷bŒêŸ?}µãwøÙåÊp‘÷RwÒ¼øÌÌ»«¥;÷óîçÙË*[x¢¬ãh!ÖË(„ÓÔ´øí~È\KKÍ¹Æ	–5‰şœ1ˆt)R&Pgà,ít/	[ÒØ½Ì«€yÄ©·aŞ7OHz^ïŠv³­\5XŠ–ã°+1¾L?í1Ë¦/‚½Ÿ|´÷ï:q–”S=»b	˜»Y¿¹e•íL@_Lv²£è«&ï?|­‹@L4éÌ#	^ÚœZ›9ß[±yöVw&7&6f·'×f`+ó»ck³g~ÎİIB$T`%<'ÚS·:°Pƒssvm!jğLÉàÜ˜B š#]ˆr¬YÆŒ‹ÑêM ÙÜˆ€fwï-nªy{+ Û)XÈQÒ0¯cmFM¨ät€¦ –3İ‚>1 ‚@_Â…ã…M¸çÆÔÎ,:…Ãa? È|Üx½ŞIº¶&@py«Çê­Äs<w¸jWlğûhacJÍ[ÓØô÷1™i>ÜI•âe}#XŒ`Õ–€Ñëğ2NPP"q¿}Ç/ê±\,‡‘t„:İsÛúvÒ“l¥ÚªORƒÆÏœ‡›VÈJBĞWõz Û0ó:·™ÓÕ¢’^Œ×Õ°×CLf)…dD§¤/g*±Rª“k«y”ılU/ª4fGĞ¨&x³'§d6¿CNyÌpEÏFÊ	1Â}#†õ¹O^}¶ğ37|ö_xf»ózœíÀÉüŞæ-ìÁ¬€u¶Õáòé*Ö·Ø_Ş‡O÷A¿„”OæNç—-gøÍ#ú\J*F/¨x¢’(‡Ëã2¸"%°®+ğ®¤bÕ.PÑj‘zÔ±pØ'„IT)*€ÙkiÚ{vYu´¬hĞæò§¾’Q ½áã®x1\SğœYPbÂÕ	Ö 1„VÃúî0ÿùN¤ªD‹a)Q18©*ˆ^‰‚gRO±4ªÑbîq2Eºœn¦zé€Abœ‰µeöš›*JA|Áê³	±b¬œ )Ä'ª‰b´Fû’-KÛ¨œŸ¹%FĞ Á™éçeÜ7çµ	ú@¸®£“êÚD'éÑı´Éh½¿,¬?6jÖ*@ğı~®"]b´Wö§'ùÅk¢â“€J*c;´Ãİ]ĞØİûÖ,ô™gn}T1:ÕFÒIòX*\Ä÷ ^âùqñ÷#¡	„Ls¡ü0)&?Şh‰HÇŠØõ¥b‹"|&é#Tb?şFH%èzÇÏÕX7>»¢[ÒûÃ…2ØÆ¾l;	ØèsÀŞ2pXÙ#<6°{ŒîXşähÁÅ÷–Ş]}o¢ìŒ¾{“—S…j#®ÄT¡ˆ”¾‡8‚Kİ@únæ}¼Ô8€Æ®TŠÕcB¢qÒmÅÇ´+§;—®œqë4Ş¿©¡ÖŞ°Ÿ»¾¹sïH^]Ÿ¶^Ü¥“–râ½Õf\­G\‹óúæ†gÛ¹÷#b¨?sbQ‡ÆÅ×gŞ\ñ=µS­Ô†ë-—®§Î¯G•uN·Juñù_LÛSÏ-8"/ï>]7<³iÈXk–±K¿Ñö—_‹¾uŞ?~®}kí•õ;'/m?±EöŒQ¢ôä¾;#Å–/{oÊÕyâŞùËGÁëÒ_ÃWïtNßÁçÊ:v˜™»‹ïL²x×}ÄÓ>«ÔíŠ³Æ§o-¼|cüƒŞK½É{ãï5á«Ş:¼tø wù Éú/ö-µ³·ƒ¯/¼¹øì4›ÇCªˆ{Ş—ÑØRÏûKy˜¥ƒ˜^ÚE7¢Åh#È+™vF¶6m ´€ qFqAœ\cA.)iOœz»oŒ‹cìğz‡ètÄµ=4qÁ4—oS!aLœ®Ák€]ÿü…3”ƒRŒsL–<Åµ
ñJB"J/ªÒñ¯kĞøÒsõ`%Ú5um]c+W#‰r›š6ÙìNú-ƒlSÕ8ş†aV¼‹i0¸æÃµH#ê$œŒËîÒó¡VÊmî§ªtü„Ä(GR4µT1Üqæ€£z§±Ÿ€¦À“•t+‰…Ã¾Hcµı­G›?^¹óÂ»Ï½ö”¿àKzo¼ùä[“}‡bt¾øæøöòáÜÚä›Ol=¨Nö·ó&k`'¼ùôÓ0x™öìæ“·'ûXØçùÛ³§Kw_:¼u÷ÖñƒBÖ_ü˜7yçÅƒ—ßéŞó.R6ynŞ¿}ÃKsºúâçŞîÕéõ'_{v}^x¾üä!ùßÖXùÿeXÔ „ot‚®…)ÃÍe¨ê+qÑê£P·±£_ò˜=|ép~ñ`!ÇË«‡Ï½û¼ËÑÍ¶g×gÖæ×Æ6À‚ØŞ'ÛÏoâMşîcŞäƒ—ŞY>YÙ_.&‹¤óÅwæO_¢,ÙXxÿÅ;·^~}zçÙ×Æ|Ou^ØÀ›|ÙãŞäÖk7^›}í¦GWÔ‹Ï}ğÒ•Jºc†e4»>¶İÍÛ7ï>W[ä'ßÃ›|ùc¯ĞãÕƒç^}Êooæû“»O½}ÃË4"Åå÷Ÿ\{æí‰Ã…£©Õ¿â1orï¹;+,ŸÎt
}cáä¥;¯p°=½7ŞºyûÙ7nn<ûÖì[Oô&=‹·ñ&_ù¸7yöÚÇH5ŠsrçeŞâ/´g·Ç^»ÏõôÆâ¥R¿ê1oòşû¯œ¼òöT+ßÏbÓ§üz.Ê½òîâşü ƒ­ìLúŸh>·7ùêÇøùwní={¬g•Óş§Ş~ùîRBÒ°Ş}ù½ÅÓ…½—÷TgüšÇİ'ó'‹§‹§óÕ\Û*?óÚÍ7kp‘ÒÒé­Ó—À|îàåãş¥Ú3*ªù×jğĞ?½Ï‡Y¦¬jz¬’Åh/;HÔt%Úkì˜ÚÉ¶êrş4î#äPÕÈ#”¬¨çc•0«ÆjOÈÙÒ´)jòì§FxDCÀê7yÓŞt7†ˆc.ªN†z¾eu[E›Ouİˆ~¸h6&E\zA!*†ºNŒ€¤³
½B7*Òå8ú7iúˆÒ±Àª_Ÿ}óÅn	AQW\Ş_ŞZ.R"úÜÁäÆÄëÏ¾şìÛêÓ~ócŞä`òígî¼üÖt3ÈQuX.û/±áj¶5µ9ñê“›Ï¼6»õäøó&'/İ{áŞòÖMĞøÍÜ+ï?w÷E§±“ô?õæäÎäÚSoÜØ^{p“O?æMŞŸ[ûé–‹:§Ñ÷Ä76f:f·®6wºz4õÚôæÄúÜ»6Â?~Ì›ÜyîÎË÷^>˜$ªsFÒ—?xáàÖŞ·Ÿ¸}s÷éÖl`õ-¼Éÿñ˜79Zº÷âÕã—ù° g_z÷…wğ|ïİ™İé­¥wn½zóîƒz×ÿäq‡ë•ãùƒù;Xi'~q¶4k”ŸY{j÷ÆæìÚÜÚÓ»˜Ó·<æM>Xş`áà91ÈSX‘úƒW¸ˆ‹òÜÜyôæ7fà“sò­»OæNïÎ½û«+GaNVvozÒ«çææ;«w—·o¼:óú³í)ïÒ›x“ú˜7Ù{ñå÷_yû)zÑ7µqÃ›8zcûÏïÏß[>ÅÚ£gÊroÓâ<ïkÄt1Ò`¼©f°«0N¢¤sÙıú€^HÔc,-ªçêß>‚ó€%©Çú€U±·3M»›rÒµ,ÇÑ^ôŒÆwŒ ¡$&6.P•h9R‰C.ƒˆ^aK/\¹Ğs gáŸkXúô~ßoÕ©=çhvk‚ -ßàÜœÂŠ·;°MVÔ#Ée»bô›|–€İgôı° —ÌòÁ*ú-ˆ'94¾óŠ	BËòëÁÚz“¸¿¢;0?·-¥\!¹psïåõñõñ—^_6on’Û…%hø/A]7oV…ê«%q+dË¿}uúİ¶Ö¨Å7'?xñƒÇ=y"ê[¼›}GuÀ~—†ZBYÚ{…¦İoB.]ƒªœF…7”Àäñe}k\6ßıˆş`äÜ›»òîëñè½ÁÂÍiïª'ÏƒMüìÉ­ ?‰4'Wß
Š³ü­´ş öö=zÍzfç]¤ö.¼¼OîY^Ã›jdõæŞ­­NëO)şŒ´ıüÖ“‡/Æ<9<(LB£ï{qÇƒ9Àë ê_¾]Æ5bëÑ2)Ø¼ön®•ïš¼F·Å—ìûiO¡•ÄÏ²¾_ƒÆÿ³U¢¯ç1ŞàÒWC-c?ĞW#¬N·3Š‘<~hÜ»‚Nûïí<½­ã©fÄW0<ì‡4xÆ¥áà"o>#=·¡úw~x„§fc°çôü W£kd1†‡£kØÄ„¬GKêG4vŞ¿úà3Ëg†PîSÌä¶K/Ò3'“Õ½¥“À¡l_px¨1»Ã­qˆãlZ<Z4æOWv§ÖDÍ'^Ç“`	ëx-3»³lÔ~TcŒ‡5~$=FõğŒÀ8ÃÎØ¾‰²®Qh¥ÙÔqÈª¯ú'Fğ.Äê,R	ÕÃEF2”õåP5YŠ-Kó¬.Íl´œ¯“­LC'B‚gª!.
*@Ìiì©1=ÿVãY¾öü¨BS^Æ›ë[ûX±(İÉøòMKñc¼Ş¥dÿôˆñàÌşd3×v¸èF¤d¤Ü˜!Âzeœ·ĞRŸåßĞŠk:‰¹,Êˆ¸TEÏ5CPÒ}£¢fşıÜ§3È1NS/ë£%½‹Cåx	át¥X)éIÔì¡_1¦"¾'[™VÎcìæÛ‘YqHzVÏÑ¼¥™:«ÿúïG<K5T	¶RHc`¼ë+ÁJºŸV,½Œ/Õ4ŸûşòRPŠVb´Nñ16ÒIã‚M¶¬/ÛË*ê.û•»ÌE‹„Rğš=F?èøU}U_Î(ÙfrmÙšù3ˆ†_Õ ñG¶sÖN–c¬®N—’­¤btê4§©]×£ÅdI•³ÿ×R¤eé¬Ïª¡(Æ\º’%œL)^:g	ÿq!Ø·ş\ SIˆ˜íçpü–¬3ÁêÏUUşúŸFÌm%VLôpÂìø2pg¬,’Õœ7ßÌwìĞğ'"Ã¬Ş«Ê$GñAgD"k?#g«¡Z´	zû=wòªÓ'È+²ƒvfvæáÅné®ºæò<ŞucbsRï2 ƒö7?yuœï°¿Z(Ëû/›9R"+ˆ†o&•lÇÔËû²ÍP+_9”ûhó[ã‚(…Çåb „v8½“ªË«—ô5Õ†,ÅË‘]¤Áí
;?–Ou¹®áôîøºËŞ¸|8gSlKÇKßÑ‚Ég[ÂİÄÚ¼Åƒ®šõâÎôqÀ¶x ïÏ¯ë&ÖÙ‰í™İÕÃ‰ƒeĞÄdÓÒwÙ:·¿|4´z´rºx‚Q€‹Ç¸ş«¿ùoçk²gMípÛÚÊò}Ö¶óèŠÈËÃm»©¨™µ¿3êü5ÜĞÕ#ÀuÍXÿ¦AªgrFœ)ê‹¡¦ú»4¾`˜5ê‰­Ÿî)°¼Q;ºbİh™®Ñ¬!m>£!M‡ëÿn0ª*&`„ÅÆØšiq¼p²t4‡q• «Ñ&¿Y>^Ü_=™WGé5Fi˜nÄÅ9³RpgZ…ióg«YÁcUàx™Àâ ¤á~Çâ)Ãâ ;·^ò­xRræ6õŞø5n|òú…ÖrµX/ß%ŸaÊt•rYcÛØ¶ƒ½¯†IüÉˆcz¦u¨lf°Mjq.Q¡„p19H”˜†Şş©ÆĞşì>+ºiâW	E;åuì–Ó0øÇSŒÏ´t8¹ã"¦76Nç7§LÖf6&ôÒîÄúìÉœÃ–ö^›oŞ(½§ó§‹FÅ°xLŠÙ½ç7øm^Z ftc{ók“»Â.·6¶±p€1os'§G+Âb ¦³=½3³µ„Kíˆ´d˜Ü±#lÏ2NLùµøÍ«Ì+™é"§õSkSGËÇ«‡ó¶•Óåc¬¶²´5³³bSŒîıÅÃy5]ùÏ4f…8Q‰®%ê–¨]™.&J‘b²÷YÛ…~Òoí¿Ú|VƒÙ|æS»˜uÇxvÛ½fÎ RW‰Jºr¸œîæºi¯¥ß]•|ğÉ¯"?ü0àè`ùtŞ1¤Ë0ÆXfÔÁé-yÒ³1ƒ`¯Çû‹vÙê¡x7N«éİjœéG#B5çˆÕ"Ê&&XEö€%€>©~¡c;+Â@~jÀÁ[ÖAº+‡\¡Z´H*°%ú²Îé&}ªjB}êêÑG¤Q¢DXz°Îˆk®X%£Xš…z|`Á¤AkĞÖ6s&£Jë†šÎmó[›9¿K…J5;Òk<ËµI0”õ(ÿWô5d€Y˜=ªJŠ†r°eë?mŸºz_…ğ_ÄÒæÌÎäÖ8ŠÚî$%Òî$!ìL"|:Fs[ã”´5Fbu$áõìæÌúÔÖøÎ„Îµ9s²x²xŞ²r²x¨VÚ¢«Ç˜MË¯O¯Ï 46¦ŸÎ®œÎ.í¯ #„}dÄ»?uu}ùWô4ÒûÌTm«öÀ¡ÿ@!'7&WOızñZGËû“™í%Œi¦Æv¡·»[ÓG«‡~»ä¦·gqsŠâ©™ÍIÊ¹6¦š*¹úƒóØdWÌ¬"bt¥©ÁÓh%Ì›û¶¾Í—é¤1×ş©«Cÿ}õì3­Ä_mQ±h‹¶ Äº™>¨”ÀµìKÛØÊöş‚/ÓNÉVÅæÖ]Ş±xŸß%Ï¼S[cäçÚb¦œĞ9	‰·–÷6§Ö¸õIıØ–DL¯O¨glOi¬Æû ë”'×£¥ŸµİáµÊ¦n¡NÕiŸ£Ÿkgüªáğô5ƒ3¦AqX”:ë9ÛLw³mŒw–UCêC.á¢k†r”KÔ±ì‹£¸ (·fP	Œ\ÏèVºg5h¼8ä`Ö:cİ´ßâ1û’E=–¢dÊáÑml'ÏÓÚç0e]9"Úv¿©ä|¢ÈˆVPóîd/üÚÜÒØ¸j†Úßş;g–±Ò|{kOÌ÷³0)&L‘ÃÈlÌy–U èåãEíÁNÕ4xQ£·CĞ9ßÉöÍ²Åé˜aæ¢í¤Üv_¡åğØºoáë¡ÍËŸºZ¢|>{u Óÿ‰(~‹ùaPŒ ª0®¸+\¡*™2hˆy'rª“.GÎ@†qêÌùï;¿/îôM±˜Ç°9­ÃVá„+E£ÄyYà«ÒJÔb#ËïÎys¿î»»ów–äÔÅo†Y®jš/yY†ò1	I4XÛ ïÈ]¶w£°]ó Òm^Éá©óÆ˜\÷òı€ó'¤p-;È"D™ÛÔÎy
ŠM`œˆi—ïÆ®J‡ûæìïa—NĞ‰4K¨¼5Ú•ªëø&Îüëı½{G»¿hdİ­ğ¥7vß¸ùPzœ¾bè¶¦©ks›é2Q‰Ô‚b¤Š¨±ºbêò3ºB-„‘Ñ¹ì½÷®ÈLÙŞ¶*V%«˜~Ú¼ñ©«¸!<Ë;ïQYİ8Æ“Ö3¨‹Ï¢&uc5ªËâb°n)ÕÉú’]»'İI÷’M›h“3X)¡¼ü SaÙÜ®]ÎºÍ\« Ø•BÛÒ3vmT+x•ÅŠ¬¾Îªv.«c)×ÆŒº©ßÒØÔXlïVËVIıPYØÆ`ß{@ãÃlDÒ³XCJVy[Cø½s’±™ì¥@®›kç=²môÚZA„•`ãU5Æö4ºH²z4@,¥ŒåqHv·½[hèªåİ4${3­ Ã€:Q‹EF³ñrØÅÔ©†^ó*÷G(BÁjqÚ˜dQÇ|®5ˆŒ+Fœê˜Ş%æ1ÁÇûñZD+Õg­F¹SİB+ÔJ·­g~©{ÏòrèëhÄ«z¿A¶ò²ÍëpÅEËœ–â.}-æbPqc5
´›/n¹GåTÑ€QRu¢Äˆ¡"Ö€·w³¬›’SrŞôUŒ¶J<`/7¶&U$&,™êÆ(í£Eµ¢‰Sãi©aeº—S²M¨¶ù-²¥iö›X`’²¥—mZÚÖ€6.3<!ºÊX‘H¡r¦ë›»+R†‚58úfX­0ÏW©>¬Bx°ãÚ0„5l`i·&v&·gN1Ée„ì
Öf·¹-j}5‡lQèğ˜SÀîÑ‰¤ öcñ™ü`Å{™ §hòï¥ˆœÏ_ÿè#<Äw&6§Ög6¦(	óc–À`R`,çÔB “›3Œa¯7@a>™GğŞÃ•ƒ•Ó…½e0Wçæç÷–½¥íqšUÓİ#ÖlÕÄÜ Ùë_x­ ÔPNRJ´ ?Û;^÷sp™b«=ÔN]=ï~Ğ³ôm\ÛŞÍt~uİûGĞPô}“Àõ0Ò$ç¾H/ªªDÉPùQ@ƒ3¬¢ƒ=b¨%*$pÑ¬L6
˜ ‚O°¡ùvVÂxrÄxğºZ¤Ê°t9Ş7vcN#‹^“Rhæš!0¨TUujzÔ…Yd%,K±F¸©S¢M15Ó`şš;j=qç‰¡Ø·ºuÅ`QŠ ½\-ÔJº>¦nœ:/s#úÁ1¬Ñ—oÜ&¯Ùœº—öz˜%Ü²”Ô~ÌkĞ¸‘˜Àº@ ¦8|ö¶Ñíí¼.¦ğ­cbUÜ‚!zÇàiB]ˆ4oñXÛÙ^¦L:Pî„X%ŠjÏ’Æ.ÒŞåŠ‹HW´ëeû6˜£|#Ò6±áRÄ
j3xy—ã{DkÃ`VÉ.£y²è­kÀâµylˆáÀòÏŸÅo€D	ØØáF¿¡ER¢'vÎ@€‚#ø8¨t	ÙØƒp@M1±ñZ¸ª…Û*ôrHƒ†8Ì!
q!‘‚Oƒq ¦<-°

õX=²šø|hÑà.¸†É}u°¢„Z˜ú¬ä¬êY:^8™CçËÆÌÚ,¢V‚‚çr(`€/í-8+p3cO¢Äó—€?„„ŸáK}ÏÕ˜ÿaİ*)!1R¤KTE_ÍÊ9%Ydx‹âÍàƒôwC›˜Æs¸İÌ¥ıè£O¨swVV#õ4q€+Ï;°T7ğèaRê9¼07,ˆÏ‚Å¶ÕL6ü¿Ç„VD2ÄëÎËõÉ`>­`²*"?`^,ÀŒ™˜Õ€™8&—ááı*WŠrÅĞœv¾İmkf[!vQl´l%³7ï5»Uî˜±ƒÊñFÁkì¥FpÈ)`}-ïKµRMs?Ù´â…9­àrÖü£´!^¢9¦Â°!œÊògë€šQ¦bx(í˜®xªÊ¸ôUör‹,»H%×,4í>£;s•Îş1êLÎ’-m­OìL‘ÌÍÔöìîäö$îJ0fç÷AÚ¢£hwz{SÎ1C‘ä×§PÏ@gíşªÕƒº†êÊ­ñ¼Æó_Vò©Å«A!Şw€.”êeš·€6–î:ğÄÆÿ±s­4ê«Ògÿ¢
)üÖ70œaõ£!¯:©DÑoÖÆÖ¦a•ÎÂï)Üë˜Ù‰eÄá³±½¹=Üø{ğ3‡iÙp­¯ƒv˜3ıÃœøÍã÷°0›i	¶¯€;5øôe×ñÅQuÁÁü´*†‹ƒ|ÕÕ‚­iX+j:DbúÃê8Çæ9ñXÜáwøûïNÿ´*]œûá­áß?áÑkV0öâIuî\»!!Ggx½ß$[¯jıís\f˜I"=sÖä·–öVwÆà¸6ƒÕUÕSİ²÷¿ê¯…*	j„K´ˆùÉL%İMö-M{Çäµ÷Ôã•ªßÂÀ S%ûÆv®eS’¥h-ÒNú-ŠI6ÉÙ³J5~|Ş¹;Ú¥ç"õBÇì3²èºËˆ¬Uªlš:áŠª‰ÔGXh•`#X•@#ßÉ43şô Ù´»tö¨Ò°¡Aãş)wÌ­‡J¢*Qû.QVÉ*!;Z…~®©:ïš4†%šdc+Õ7º-­hAì5!¨FB0N²Oú½ØVÃY0¬5\K:ñåô It3Xr:§©›.Gêù:ÖİE?t¸BV³~}¬NöZ¼fŒ4vÑ.Ğ*zW¨™¾¬É|”_äşkGc=Ó|œŞÒó:§N"1ĞÁtF•âBâì$ZMÒÃÙsè0°,ÈZÉRjPPÌ>ºA#l¨¯«á†Š–³¦Aãğ¼¸EUïb¼éf²çègdQ°ÁF¡ö”ß¸§·4øùÛŸ†l%Z¢@LõÓíüÀâÁĞİB+ßËvA©'úÆ«v1ñ*©æIc†~vwf{É±;fáØo\Ùó¸©©…CÅÈRƒI†§g·'a?ü\³«ÁİÀ‚­&L5È'„°@ğñ~±˜@/IR²ãòZ)gZ–v:`îD*dO³Ãt
Œ[+ßÍûìWYî·Îûtëœ†°>µ6Cs ÕÌ¬MmL/‚æ«˜zñz6Æ×^‡Æ'ŸºÊá—§¯öÖ±Æ6(ãYÎ(ÆV®ié[û,FUŒ¹(W´lëÁËíK†Z¼\³œnfı&Å.ç<¹ZÎci;ºÆ.pGÉ§n‚8ğï-ÊÇ0_`Í[Eçş{ŸŠ³Å\¸ú)µÏ—_ï›‘ó=óªêw:â¼×KÑ¢>`mæûi¿Q±+™2*HQÎÒÊT¢•í}û'äzã®i‡q‘)Qb´jàè:SÕõçşUñ÷æËŸ›ø»¸ÌJ¡¢Îmõ¤+á:#à}°mDÚ›“³gç½—HÏ\ğcıqwò`å`Õ‚ç^Ú¹9{² >õ_áƒM›íæÛÆˆ@``HU#,!…Û¹N>`:ü|&£œW@‰2]'äL»ĞJ6SE=˜PL=Hw”×ì¡îÁ…_ Ád~çæ£•Æá9†º3øøy¦`²/ßÅŸÏEgú¢.óö«VzîJN=Ú6h«©%T@#ô¡]„™Ïx„¶zŠöç÷—0Haoş,Ãû<ÛÁ|¦à"fFc¦6Ù ×‡šê&VáXÀŒmÕNù›#¬^ÁP5¸!VË5í^Ó V¶=`lÏmå=…³JÛŸĞ 1ôñ	˜æ4p¹¤×âvôrM[Ë*ÄöAª”ôäeµ_8‚†Ú¥Ûî1û,}K?ß Ë‰š¡J8{ İ/tÓX_â‹4äüÙ®/çå´,Ì*.-àV|¬*¥¼¦v„¥Å §÷?d/U°ò·¡¬SJô3ƒdßêÉÉ6¿­iöá«æù“[ô™Çbƒ×o.:\;äØ>XfÇóŠ™3Œïùö=öÕ}Ík\´Íúö<öåS÷á²eÕ2w²²¿`\:ù*¸ş‹5÷Ï/É¦G=¯h`£ q9ßÌÈiÙÑ·2Í`MÇ“j…õÂCíuE]´EĞ×õ.¢Ä±nzÃ^@#uô
? mş¶†ÌüÁGà@*É¾y`î[|VŒÅòÛÛávŞC±zÄ#ñ|…Ç±ÓŠZÅY°†´7c(ĞêÑüÑüşÊñÂáêÁÊâÖX›0°èÿP½_Gƒ•½zîÉã-
ØÏiuM	ãõ°B,ë@=0ş2C[€FXL–Aß Y¢gÃ‚V[A15s½hÆâW_qahd^ùøzv^øî!KÍÖ~ÚCUÃR°Ì¾çI.^Œ7"`ËØ}èğÍëE»…f¾.F{`™9±*RZI"S	±ÌUºÈ§Ï…DõœKNã›¢U!xz|C°*&ë=·iñxÙ4·vvšõU#<e0¶D=ßqà +†àE–õÌÓ´¬gû_=‚F5ÒÉ)°F¿Åkr&**%ª”@£µèÙIÔß× qbÚ®XÜöQ6ùsJÒ[è[[æ–Í‹à®È5hüé¹ã2T¢•tÖÍÀ<ÈÊêyÅÀ,ƒıZO¡iÂ’¯Ó[¿D=Zà_œkg´WhDÊ4ËT`_‹.È%X¥xíKõ*2)&ª(¡V¶“ôİÖA¼o;ü¬2ÈµsWí©±º­DÔ©é£ÅãÅ“ùÃ%{
¤“1`ó/ ÊÏæôÖÄáÒÉh¡>æ¬bÊ×8/¨e1W¿íh%»É–ÃËT#Õ˜“Û'éNú}ÃkÈªÃšs¼upgX`Š:6R¡1g¸*ªıøÆ_.º¢b¨ª¯f;¶V^vô¢¬Şou›é3‰÷M4şıĞÏKûè†S¢‡”aÃDˆ…¾ğ4KÕcg éß¬Aã¾—‘äÉj´¬o$ŠÁrH ›³gê8º)Ğ°“Xwiü£àçæ&ˆ8uB¬©f[fr&j:W¸©æĞ:şÇ+oTU¦a[ü-éE’w@.ê+	àk†@,˜¬L*–­õ©%|Ïç1ZNµgá¢¢>ö&&-n\PÔIz˜V#i¿Uc=qÜ`•ÆŠa°Dó²M´,ƒŒÏ‚Ò;Éfº?;ëøg£Ö#9£b ›æC<U%yXQ½¤×¦ä¼*fÔwiÌÃĞkÃ¼Y6y­>cÀîËÓ]h„xZÖãb´Ê,Òø¦G=VSşzlıŒ<–€5‘+G‡8ÒHã{G„:¡}ïM5íR¤í&ñ<ÛksÀ.â‚Á¥Ç÷iĞø†ó8ƒ:…xÇ|;İrôs½TÏŞ²F§ÎIÔP"ÿÚü†ïX(ÿµ¾ƒ °&O±Û¨±rêo|M/£Ïş`~}v}â`éôÕıUx-:¼¯Í¯Ç¢³x:=»9¶>ip‚QÆ‚A#®OìLo¨Õº¶gÖàµ;…¥×gU$ñi•&âeß­M`VÀÆÄÁpwÅ¤¨¿@Sïdx)jI[ÿC0©c[3;¢aætùxõtédùxşÇ‘û×#¿2Y‚ñªETÅP‰”thÏá¥ëQV5dÄ*'ÃÑ¥x•t‚\a#\¼F8#ÎD?6ƒÉÂés0P'BßòÈÑ_Ú[<œ;Z8YŞ;Cm[t(f…ä`7øöNæ`v&`ô14' ­~Dû=‡×ÒÑ*ÎÜÆøÎôñÊŞŠŠµx„¸SK'0ˆ	ˆxÑx&Ç )<»-€ìğ!œ]+èğî¡u3¿>½©†oLíŒ]3¦Mı¨Æ^{Ãx®‘“•`5°+Ù>È}PlM«/Ó)ÀÆz¯-¬×?ı=òİ©Ù3°O	ëÅlNc¸ãEDB	·
«o‚tmSÂÆôöäÎÖ›Á>nMèYÒµ1µ6­î¥Ÿ¡
±®½™tÛ°—óƒÜñÒ<X\áŠñ0¶Ø×{¾~ó_@_Zc\‡¼£•(>Q&€wäÿ?öŞ<Î‘<«T„B¡[ê«¦º«»§«¯ªéê+B
)t©û¾•‡2•J™Ê”RR*SÊ””9°ûXÌÚ,ËbÖÏŒıa1^†]¼ÆxŒ1æÌÂÌØXøàXXğ.,×@ï{‘RUVuFeMÑ³Ã®ø¨”R„~çû½ã÷{ïûœåÎ¦Km]éh¶3\U8µç	L~ñ
êİÊc$Ñş†Eí’W	^·»b]«fy’“73­l#W„ç>+B½³Áßö¤änè¦<FÏ‰¤Ê¦lã¹Û$"”Ån‘ó3C£œ.¿ÃSÁe4<7P+9Ê ¼Á‡èbg©³Ä¢<<eÁÓü-Ü"*ÙÜÖög@Üâ$H¸BRôwBœ´óÛŸ#’±çüH¸¼B¸v=ºzb]X'Ô OÂm7ÖƒíÄºæ¼K@=›Ûù<¦_Åö.Î; ½è
}ˆÈgŸ™Íœ«[4ÜrwÕ­t¬µ×»}·´]ªĞK°øİr³àyòù+f·z…q¹)á€¸ôv¹»ŞÕwôõtƒ0¥›²/À3ÿîxSÀıâKr:M£z+óëìcà7¨yªˆ%zUÆU±3'|ïÔ™Á~„÷SÇØ{Èbg.¹¡ÏõÂ§n}Tg–™¾£^=°Ú¼h'·L|‡	]LÁôÊLû`5Y	¿<x”:Ii,¶×ÏÈ{è¡§-à®%œ”ÃU${™»ÿtâ?\±g|Ù‰ŒYºZPC^ÏînXT»èNê*í®¸6wô{÷iD‹=%ü÷1xù$K4Œ;TaÎ:ØZ§I ‚ ÄìpÄâşâòL}/P/õÊŠÍ¤çü}~ñ² †º‡<…«b‰Xêy€ªyzğ÷¹¾AÈ"ÁJá.¬Äˆ&5ÃS÷ ,8Ä“uÔ#äïBÚùîò›s·{´Ëx‚Ï‹û ¤¹ÀS†å*ÁæLE¾Ğ’Rÿê{Uµå.îB(İ«v…cÍªv+œ£âXs—ªDM á_¡áEuà¾i–ªäYš#ÍHfyƒhHmzûj…8ÇûuşÔeÙ?w]6u˜M÷]Oû÷?^¡©YXw.°]»+ÛĞ£n	}!«¹-Ê\Ø=ËøÂ[®œ¦¿©çÙ4èÕ¥¥¼_ªJª¥öÆ¶«·ë~ù-‘¾ü]ı½ï>òM„=z8¹±‡\®Qè(8¿B=Ä_ôo“>ÛíWÎbÌ›"vlÂ‰QÊa÷Ó FçuXSJ·x$ğ8·Ú‚úñ45}
3è’c½‚C-n¸4òxAÃãÀb+Lm!`o@™´‰d	áBMîÀ7İÕdğÇè‹WJµjz»dÓt5vUa_ÁTanEÕ]«RÂ$ğÎßç×çÖ2eECU0$[ØÊU×vu»›•!mÎ2rşfxæ÷DÆù37ï}÷©o—H~ÜDa¸M`„Á³Ø4rF¦aÏ“vsPÆ¢#¼œAßŸX¿°æâ'VµQxê\gYâëGï0Q8SüÃ+ü[€GH1Ã¥Ü.í*Ù|'ßØ¨æœ9_Ë×Fòxî?‰ğ¸Ÿ¸sÿßƒ™«oÂÍ
–™áˆ&4áYj<à¥Csoid èp›¹4)•õ,<vN‡Ö¢÷Ğ‚ë‡íúèÔ}â“q–v;µVeXëÎãš&NÀ¶Gg.<ÅëEfÿÀx”TYAw—,MRÚØqDãPÛ@+vVF¬‚¥=ÒPßKûĞpÑ°“şÿ;ò<}à’’ œ9äe†¡Oè™INQƒ<@zÆ3aÂsà&ÎvD¤†¡Y>Ÿ åŸÆuÖ™[ç8«œg6Ìÿ,áõ®qÚÁiœgÖ™]oÓ8%=ÂzPÙÏÀÑ»•.Q9	œXà=¡gôÎÓØÄ}Nªœ”a„«‰¡}`…°X{2Ï!£´*x¸, ı1‡jĞ—ı²´ğ·{~’wÿ9Óÿ÷¦{÷³°>şŸÇœãŸûIéûêy~ş?ÓÀW†Ôv5¦ù0İ½,*Ğ,¡´Å>Á`§Å]ÇØ5µMbc›’$æW` şê;d¥Æ^èÌ®ŒÏìJ»ÔÔô2ã z™ÚNíZ«Ú VxlâŸœŸR?HQ?ğ3÷(9ÏŸˆp»˜ ‹ğäV¦U¬Òæt5²®ØÌ7ĞËQn–Ú„=?½Ê³.ÛLï¨ºåİuèÑ;Z—s°îmÚ6wU{:»º
Ïü™ˆM…Ş-‹ı&õçß{÷¼„ÜFè_©w¢Æ	Ò4›%9há1ÌˆNØ!Àpc
eú}ı¹ÈÙÌƒ¹°v6Ó”À®ßÊğ…­´q¹Ü·’áÒ­L%»U¬É÷…û-öâ²
=CÁÖ!M¯wŒ£gÑÓèYL2W‚†Ö*]hâ»ÊAE6È´NB‡£%ÔÀ0 ØéN¥ı4<C¤ıï„rÿB„'\•­(ömï½'ä™º/Çsê’ñó¸,3l.äåß÷¾ô˜-Sı÷Şãæ-c$î3Ğ†/¾s,j4
7’£-©p£ŞrœœFQË!¹­sœ
ÓĞÛÿn¸÷—ØÖ‹ÔÀJª™êÚ¾ro¥­`€iÜ3j¥w6¬›‰¸¬oü…¾=|ÔÁ–3˜Ù	s, ÿ´ ùüÕUñB&W-íëvU@©ë{k–«fGËejyH³
Şhï‰¬×Å	K-ßÚÜ/2Rh#è|.ùè»
»‚•Õ«Ü‚“äãoh›+[+eó5ºE6ËµQ^§ën}'_+ãé¿¼ÏÍµ8cÑ´\]®oØ7ÚM§, ÂºîRØ€st‹)ùñGó•¼ëLğ1‹ğºŒN¾õGyAÛ-¶ç=ˆ‚ŞÌÂ{ˆv+âŠèqtfÉ#ƒà-€'å–N’§Q¥ó,qœĞX0\ûüÛç D1ƒ ÜH±´¡ç—Ÿ>ôz°ß”H¿«sËŸ)42F•¡ÈˆÆ†UçXë–öt°=º%Ü£Ä2d"ãÿó¼uY+İ"·¤¬Ì M¾¼»bW9NõÎf+]KW­S.Ò»l
6ÇKí›v½]¿«²*\°¨»«m[¹—oRèÚ¢ÿøå¨¿O=FÎåi÷ª3;x%ñ†÷Uá|î	‘šÿö"f	ìw“f{ì"Lk»¶_ÚÍ±ÙZÚ”C×˜® u)ƒ˜€•0¤t%ö¢»Ñİìnì•»
ÌşŞYw®î
øÔe0D+W-˜©-Œ±´‰2JÅÚÚ¶ÎrìÜEæ™+Ê¨ƒeÄKMiV¹W¨·$f	ëi5ùugiW‹1I7 Œ—”±ˆ$)ÒO–nl<Õo<›£Ó²¤ÚûLùÉÜS^I\V|)ü">{î†-z^¤Ew-Yk½»i[±—;:k©SÚİÄœUè)Æ5‹ú‘22¯/,YÇZscæ[$“CıÀ aiŒ)jÒó½Ç¯h‡™lÊ:'Å-”¦c^ÃL¶™k¯´…Y¾)RÆÂ¢6ƒ¥Wi‰ˆaŒÔVŞ.#¶>“oÑÕe(UØ¥xEd­èÉÏdPßªS†§7&M»¼£i¿ëj·KUûÊ9ÆÔ«W”aÒ¸;ŠÎZ¬gÅÆò¾Æ©w)¬›ûêÂ¾zåµ+Ê`¤ÍL“ªÂhne«é­Õ=½8ùŞF;»«·oî
 ¯_1/U)Ì‚–£]4›m®KŒËŒ‘¼F»×\‚'Ä-‘2í0¤Ù|…®ç[2.ÓÊW¥LÂ»±£ho6s»å®ö[á™Û¿‹çæ×H%‰àİŒ'À´Ic›FN"³ğY³úN«Îzt¸:òxz~{à9ôõüƒP©ù‡>’—ñ‡¸{¸¼Œé‡ÎĞÓ¸©DØ}@î
u¼!2¶‹}}£jGÁ(]ê¶¾«Ş.mkL&³%ÛZéäMrN{gæ‘2dòÅ^y…0¨]Ú½UÇ†Up/Öİ•íuçz[á–7…Ó¢w¯‹a^n¦jô®ça¶Ú¤İÃÄÂ›Íòîæ¾0ÇÌ4_ÍÖ²LÖLTŠœè„M‚h‘ k¥|ä¾°«ÆŠ´ã[ï­½LssOe\ù$­Œ´{ÆEm'ÍÒfq_8ÿ4ˆ´ã.ÔC/Tò{`9V·òu‰EÓÆ¤ÍZl5ƒX_F:¹}awù§oK%˜ï—“eŒwÅè'Œ—Â¸ O/(3Ò ùQ§%ìëp×½úüx–‚I³Iƒœ¿»c
ÏÈL2Çıa¦Yôƒ 9©Ik[<5sÈx9hã ]s ƒ–2EëÖ7ÒºôÂyè=XZ‡xqZ—Ê
š˜ÏÚpO(8Š{eø½Î'm³ä,yÆ4<Õœ»PÎÊÌ0;˜ƒÅ(ìÌy#°å¤ì0$¼ãXs"c½ _–®,›óõë–ò¶r_ëÒ8eN…u½³éÚlóeº¢^×Yën¸Ö;…Ö¦¬Ñ\v«ÀiMËû«°Ú×Bæ+Ê°(;¥šœyQËUrmµeÕ®·nX×÷tÀ{W\:„Õ°ˆÌ9z5/¬¢Ÿ†ÂjI#Xó¾“è4~=KÍ+=~œP`.0F »aĞÙ	ô'Ï‘£qU˜Es“X±&‡hM‰1ğ 	‡ûz§1•kF=ä±¶ãÄiTcÑZ€&0¢Ñu½yI]oyÅ-„À!&ô³),šÔ©S?E'­[mSˆÀ}Ÿï¢ÿĞ¨¶JŒĞOÓĞÓóHyMÃi¸>¼OıGçé@ı"+û_/$‘Ì¡å¨J®!©‘æåºÄZr­m¯wÕû]íº+ PEÊXdìc
Æ¢‘`e&	Wä²<JD–ñ™VôñÁ3á_î“İoO?èw™	zøB?µ–Id–€‘÷S1KNhŸÌD°ÒÀ (œ¤z†<‘–ï~ÆöE¿Ší3Á~óõƒrv¸$wé-Ç)•ãØs÷3¶/ö·Ï$±œ¸§ş‘‡âF¡#ï¥ù©í[:ò“66IÁ*P¦0òş4u÷3ÒHò
½–“l@£Í¶'ã€ç7Ğ]c†Ò™Izn¥¤®(Ã@5³ÆL…0fÁÒĞíæefy#]É6ÉV¾)H²´­Şœ{ Ê[`•ÙÊlkwô;ë»«ÎÍ.ès™Ca“âŞKæ!|bñæç)ÉkØ/Ò,7B´‘6ôƒ [CÏ ØÌ"g±YDíÖÙ58Ù¯&}.¸¾f–x¹Kéš&-
öîglßòW³}ş0DûIS/¬t*ãzËF’òŞıŒóº&2¯-LdÓ»iC¤¶Ş¦`
\¦²êPZa•4+¥tEf9¯ï¬×åõœIk*‹y-W
m-ƒ½“må}ım((cQî?ü­€n
™8ÕÊL1ÿæiø,1«œxˆgÒ¬£ğ$q‚Ùé"Z°¹eÆsÄ_bêc.µG Å§?CIna}®@Ä‰Yø46Œ3xi,«ŞFòRş txûVx²,b‡/’?=	/ÿ›%Wš4Ì¹ÛÙWÈ9å¦ÈmPs3Z½¯´“¦eN»¿Ã«d«ùZ¦æCÖÖÚ9\^•GY^¿9_^ Z=Ç	µKí–B2VéĞX&É±°}"7z‡ŞÓÖ£Óç¾œaÂŞVEæë&æ}±F»Ö·5`äkœÚ5×zCnÈ04Ÿk*~MdÄöÕsÆ¬Ë,1ç·VÛe0E¥˜è–Q:Öº+;PÕ…à½]‘2[æFº²êÖî(jƒzñ¬´İÕİîªm½AÃ(Éú¼e|è’2ÚsOŒyç¥Ó§šÔ.>ŞyüKÄ…Ç#Vß0nÁDZx7QeÌ¡Õ]Kæ­Äª°ke[*²Ş¥·—-«¨r^A”B6³·7Óì¦kÍt-øêò+ÙAv°‚[ğã‡ü;ˆ ïKo'ß½Ù‰ìøp%ODHæbFÃñOHÅ0´áôã—Ÿ(,ğ4ÄN.ó¹	?&fÂ5|íÃ'!š(ªÄÚñL^°sÌ#¿à«äÇ„¶ÆçÏ¥æ¿óVFŸ!Yá|ixî`š¿eæs¯+)sn7-®såîeWu/+º8ô#"œ'ZEcØH‚{':dŠ™ĞÅ‡ÑÒ ¦ˆŞû,ãõîc»”—ši÷ì#±ÎÜr£Ú¥ã‡fpt‰QŒBrtÀ(l$C›å(ó£'>ÉÒIjøG`œ¤Î‚ğ\êË¼€¢&1¸R‡}âb3‡,ƒÓO|Td{ô ¼Ûƒ§¶+›xè©î/ ]‘‘;	ŸÚtá3+X¨±CøúF‚£:úœÔ cG!`0¦Ê-=“diâÄs(*(s"”§*¬6
v·CzÖ8'n•M„;VĞ;JË)Èj]LŸĞ9dÎ3Ğ’4)]Ö¥„™L]S<©ãõQ°º2ÃQH$ƒ¤	ë8òù%^Ò~â‚gdŞC£ÔCs„¿g<ô&NuøÄ:E/Õ˜6…Ù­Ç.ÁÂG=:q,Äœ,Q¡^DÚ«k9±ªÃ*»&<‰ëê0ÜĞnµQf Ë4©wRÆ#Nk8õî“è,®ò\k]gÓĞi¨g>dåü€‘»I;u–hƒt	4UÜğ1ı Ô{ šMßH{†K'îYüÑ¸ı=ïqjd–ñ¤]iWYµáÿĞOzÆ.½MãÔ'¶qJ•ìšÆ”ñ¡¯ç9ò‡u.hÇêßêÄqüOÚÔiò$>M(§ÉãÈô]œ%íz§&¡çüré“A¨ùg1]xƒgl:¨OíRZ§VM¤çéóR+Üw‡Ñ÷Pë¤LZĞR F°|OãÚØqì,„³@àùËÎ‰=ß~¶F¿F„F¯ò<øï45ÖYBgÑ;tÎ¶clWÛ”ñCÏÀO(˜¤Ş~ğ³Ê:ÆñItŒ§–‰Oğ¾4&NÚ¯p2c–›{Àµ%A9ØC`÷GA‰¿ïí™GœœøşĞ;`{‘¹wîûÉĞ’‘T‘>GóÔÒ$®°Î,SËù«EáTØNİÓ å9%'nubæGaÔˆ”qä;4S!’yz¦Vá¢™OXé¾/é‚<J¼r3ÅRØü~àá!Â‡+iTÛ€÷ğ´A'O
Xù%+3yFÆ¾ïÄ¢†^êİ
Ë±[ÓEåœä4†½Ç}…{š !¢ˆMlãè¨ûd©g‚’½3` Óˆd“ŒùÁ¦ai#…»‰SûqJc•øgöÓ% «†QêØIñƒèÔ¥²*¢ÇYò8z;(§6ulÓÙõÊ8J™zK„Ÿö*—:ª°‚¾ë¢ıı°„dŒÔ6q)İ´©Ï†®X3©²ª,’%X×æÈR)G²ÂÎœGÒ}åÁ‘±´9ç(6õ,Ü÷ g0€¬•¨ĞĞG0ƒËhô£ÿô~ıZ}ñ‡ÓèU|ÒJ›GáQ°Ÿì{¡&‹Ş©rNRÇá™ø# ÅŒ Q´ã`ı‚Wúm˜¥FÒyá
øîút mKR3.	<ÍwóœÁF†ı#VáD§Æôèÿ›$'m\oiNãTÄÇ. @Xñ@‘±GÆĞ°	84ü;qe	¼7¥2’!+÷–Ó”2:ƒÙ;Zü#ÈÍDàÈ+eé Ü«´KáV†µ¦¾d”®‰UÂ0
õ¼Ra¢°ìØƒèAtf;T¶3§Ê0\ê£¢çØ–qJëFî§ŒOœÓ˜.~Ñ[¦.àm©‘¡6#è+‘Y¸¦QÎ£J@Â#úÄ¡‘ä	8¸DûC¬Y Uà| 5R#´#5
RKÀs½£ĞAhÀJ–|#oßC±À˜!á"|ğnÆ†Aï^è³©Ë,z™Äf]U:ÔöS».6X:ˆÃ…¾æH?¨ÓY/\èO¹páŞòe´óS_Ğ<ÔƒëS_ÔÜG£_÷˜|4üÅ¿¬7÷<„EmÓºÔö“ˆG¼¸¡ç(4àI˜9JT¿Ü-ÄØD•¬@‹.ULĞFí`áZAk‰ôihh±ÀÑŒ _|›2qêÅ”N]BcUG5	öã'Sô‰‰s»äÌ0@ø%~	î¦û‡ŞaôI¬c‡Ò.5È}#–X¢ÌÒà€G)•[ÛOj‡hèÊôäâÄ\ï{èÀ ¦'fãØØ®.¤‹'5.eT‡>½N%+gèi9ç¦Ù¡Yo?vkãğYRVéÖ;f®i`p#à@=ƒÌ	6;FÃÀj’€æd°‡†?Œ^PÂ°ÔhÎ³äÈºwpàƒõÅÉM`[@S”/K'­EçÖb>´„fAí8¨“GŞÁÒĞ7
íğŒ#ê„2æ.âH‚ş2EÎŸR»¦q ÏèØvìĞÃ€ë<IÙA$”ñh‰¹2Áx‡*5‰p?®Œ;d&
tŸ¨dá‘Aí˜EOã¨àQæ8³ƒ4È½2^Hp2¿w¶Ğôûú+ÎŸê0nÍlCjSíå·ò+a’›¤¶ÍîÚÎš]Øİù¯®8û­æX’•›Òf’%E¾h +NÔÅ%l®]ªÒÿ<ó"öÜÅÈ„ÌJ%?&A´Œû`ÑÇŠf¡CaŸFÀ1óöŒ/‘: ¸­‘f}Â9Ó=œ÷{ß˜ğÔ8˜´§qàèå‡P×°r˜„h&x¯n©ı’\0ƒ„Y8Ç2NğV3‘œ°W”:ºĞÚv¥MeE&Y¯œo±…p]nÊ™Áì6ªùFikWnkœ²ºÄ@0O
ûæG8••ü)ù(!à ¡Ì(g{>C˜1’tÀ pˆ\Á^ Ï[`
ˆ§Ó0ĞRì$qF&q-h¹'àÑ,&v–˜4ğIğ½w16ãôXì)ü6Ü½G£¥Ö§	}ªi<Mu)\'©ÓÄ4zŸ$N§Q½]kÃj8N'pFNÂ*×YDo?I•)?ôö˜ø€bpovœÂxÄix‚q€^<C¦Y¼OÀ¢KĞw¸„ÈvGˆƒ·t wúD€=‹À]°øãgáã„Şªr«23Á¦‘oÇõ6 P‚
hû,:ğ¢?=aP»aÎ,˜X4 7|ï¡YšÁ2¥¦^Pb¤ÃĞidíQ¹&©# ¾ ÿÓŒÔtäëûĞ<a"0Òòo‰Ì—ş…÷^”Hw,§ã<|Îäyô”9…» óÈ$XO¤	u`ŒœÂ(*ô$ƒùÀ¨K|æ1R
ıÏğ>~åâsè[‡xvÍ„Ïa¹ˆsupP&?Gt4b¤Ü[Â:1uÄßéÅEßMı—Ş{SGàº@\Kcp¨­­9KÂü'”6Xƒ¥MÊbÌèèş¬E³”¡’NkÕ;vÌÉÉ~ÆèÛD¤é§®Ğø¸wÈøI—ÉRÏÃìæ¡_æbdk (0>‰€c×:€#ÛIÿF¿¹§~!êŒDè3‚L5Œ‡¨ÿòT´¶õàghÌ<Zê±#³ ?òD,J“6yd$i`Ó»NÜ÷¥•[oÓ;-“%ih rej-Çz–;•QSÃõıVê­;42€´P–`»ƒÎz×sWÙg.%sd Í /©t»¥C–4î:Î‚`Ä@Î‚ô8òÏ¢ “=¤ÿ((5R&à…ŞÒ%w)S°LÔ‘Ó páÜ\na?Í`mÏ,úˆÂ}b½9®ˆYµviø¯J‹Ä¬[{²Ô[: =U‰–€•]å?âû>ÂãnìµÚ3imJ«Ş"aG!hè=ó xÔ(7Ò!X¼R°tz9/ahè;’÷—²¯40{GÖµ$ ú< -YàÒ>‰	ô[ƒ|i­[Ça j°Ae&Œ9yüİYòÑĞf)èsÈ­IªğÙ2µ]g©©Kkk	e7hRûé¥6‹¼+k‘‚¿ı1)øé#P°¨UİR¼Ì+ñR°oİzD/
&ÒH„`å{I›€N”Òpçû€ú¤°¿&§­ÑC¦qĞeüœÔXÔa¥C—R†ŠÈ™u‚Ø¡Œ"q–œÙIhë^™-?°åı}Ÿ<(sÀHºh8*DißˆøQ½c&aè“ªp?t™Ú„=J›Ê–/h{:^öÌe¦’ŠN\c›Ö
zRtà%µÉ³Ø‰ ÎÕ÷|2o/,Ä)F6©w ½<
‚-V,Ø¡!H19/3`ïÁböƒ2¸6Ó7>ÂHíƒ¤CÉ–YDQAeæ¡ç0>Mèœ§Quø,:Ã£N¾$1zÀŠ^’»f~4qLg+;©6Ê02Şx yLDfş¡Yâ-fQYWÚÇ`ÿ*b`ÙûÃiWÆNCgA);ôbªÔ89òÃlaÄeè4¬…‘™DúÆw"Ğ›Ù+yĞÁ˜@¸ó{ä§C´û49+ˆO,ê„ôz’ìÏĞ¤„ÜE3CXC°šÌ2'¢ÂKíZ°édÎqìÔ®‹Iq÷d÷G|‡ˆŞ²ÈìÆëA'ZÙYo«m›N½]¹WÚÖîæ*d…@«òé¿¿¢Œj†Q:KÕ\#Ã|±<˜‘)‡Â±±W¨çš‚‡ŞwŠ”q…}¹%ã³l¾%¤µ±‘víFIÓ®õzÖ¬;ÏVúw¯ğª5ë,k{*»n{u_»§ì(-KÚW·Vm+;Ú½sŸÒïº¢ËZ[ÃÉ·²[¤MÑ)·2[Åı•vÙ²ÑÎn-›4ç©§ş‡+ú²£`”Ğ“ÍNiGÕ]n¤›™j¶YnÉ¶–ªŸ€gşÈéÄ÷>ÿğÓ‰›ó¿…¹+¶rµŒIn ˆ÷•©,·2 kf¶Wv7]Zë}P›O=#NXàËn=?ôK¤x¾‰4Ãg7î¶w
7v”<i#áF>è&„UbRCı}‘qp[ÎÛ‡˜ïjKğ$e%\¦%3P°6,ëÍ½ÕsÿÜ‰”™{LZKİÕ-"tõnıni·lÓÙWöVì*»ºc„ì…ÿà
İ¼)kå·(§¢Sà@O¯åª4»Ü$k˜",_¡Áûó"e,Îª·r5°¨*ÅæfèÃ˜nÊ]¥í4bDÛ7°òù¤ˆ´>pâô`òª´ùÙ™¬òàì¥ÍL-ËZåÖ2è{’z¶"5BË»åîú¾Ærrçâ¬
cğht°‚Á8Ad5‡Ö¡ƒqŸÅônÌ´V	/s[”vĞÓ8¢Á‚¼ûX‚ñü8ÿğŠYi,W0NU¹·Ñ]Û]ï®@j[ygs[×V:uFp~·ˆŞy1}Ó7ÿñ{ï¡O¿ù‚,Äê£öŒø¨5cô+bò¡&ŒÚ/b‘Ã}3b z3ûÍãø£Óï‹óA	Z"ù¯Š‡Èµ
ÕtUÂ¥«ùJº•¯çØ´qhf³Yvë¬Äçá™ï™]Ì½@H.÷0c²U¢n[R–à–·V÷t{Ê=}{Å®s+÷W·ËçğbRŒ¹òx”HC/Å÷ú¨¹§‰3ëYLé8‹â±.1N;f®³Ğ©EbPÅuv%hJ§ÚvìÖ¥&Ö1ØFZ7èKVûv2ˆ^zXÇ¤YÊÓ0~ÄkıÇ"½zXdM=Ïƒì6K—©µìîê¾Î¦iëv•–èŠËøÎ/À˜ùÜtä9N%î†ùÂ<"Ä©Aá÷ü¤ı:”3ĞÈïÃ4Ûüå,&¹º»Gğ]Pö÷>b_ô¡ùGŸï=t~`tÜáÅ³æÄ%ñK†G`ZD[ù„¨’r6(à¿k»úöªMß)ogv6º%ÄŞ.Y`…é1bëzÌş}ı¿9j2{ï
È`øÁªK!-á¾Æ¬}Ñeğ-â³ß#Xğ¹÷ŞJ$ç¶.¢‰ m¼°aeß‡Ôq~ö>DL›‰("çq>&
-“€Éò)‘Q¾‹¬)ã(§3ÀWVíˆ˜ïè­mcu7ÇëwÊÛú?‹ŒróšøŠ¨æj%—Ş±iScşì½5‹ÎL9”r;»«uÓ|Ÿ_  .zÿñ¿z” ‹Ù °¾M´I
z1ÉåÃZEëû8Šëä4ö5X×RÓ¹õHOˆ&ëØ(3c½Æô\ÜÙ¢q÷â£¬í½ë¢Êu5µƒr¨ŒÅîZ-»–Úy:·‡õc¾‡@›$FµSmQ9TVEeAT¤Ã`Ï7ğP¸f©Ç=	÷‚ˆy„è
»Ê*A„FŠÈTœ”Q0¨GPÚ?éÅİ¹¿ùÍªÖ¯C^sÁ»>:Ëš¹Á(,«6)OÚÈ-Ü¨É5$¦âş†«„ğ‚?(R­şQ~ßà‘uLyB42[i“œ%k%ÛJguwÕ]jç¶r,%æ¾‡Â{Éùàà>õ—÷7x>¸R“œ#a¢ef˜r0ü/ILØ q*ì
ø$|?MààR<e „ÂÎÁ_‚ãæ‰,•Ù"…OÑf‡]mÕ¹uîr{m{m§âx¥Sê*:šÍà™ùøåPx‹ğ«òzbÏ1Í¬·JŞyöåëïÀ_¼ìÁq5ÑF„Ì7e<ÍëÚe·Æ¢ßI×ˆ
e”7èjAl\qöÍº‡9Búäş#ïØ1L:7(ì¬"r›úï~Æqúg"ªĞ"s«°ª=›e—ÍBXÕÎ[yOï.ílî*v„íö½*d¤ØD8\Š‘×ó@=Ys®™kR­t³`Ó·&(—ÿ\Ä`XŒ5%¹Ú``Šu·ÖTäå†|}İ½nStUníîÆ‚%mz«æÁ•Ò °èE&Ã eëí¬=¦êl àÎEŠ]ÔÿG_<§Ø·ˆó¹å´ÖixÖÙ5V•[‡këÇ.®­Eó$÷³Tó 6÷û²RFßÜtéêt-]xÆN­UaQ0Th$FèéfèENâ`ê»ñ8JoøIÿÑeÏ#U¡ğceşÈƒQ‚	ÕÎ]¢pá|ÿ‘ù¾½p|-p>ßÈï•[Å-²™1ÀÚlækÅF®­Ûßpa`ŸYŸß7ÕmŒd3·«l¯V@˜µK½SåÉÀh›	“`ıK‘vœÍÓ…)ˆò­UKĞí¾ÒºÙ\6€±Ö4³»B;~\¤Œ¯»97Ü³µB£h¢œêí´‰°®[”ÛëóB-êAA	?üW"´ûûÏß?ãbÙ'ïÎxÙVz7yñºE"Şşë=×¡}øj'ü É7ËûÅ}Í¾ÒUr+]ÚíµÎQn¦¤MÛ]q­Õr’0öÚS_z§ùˆs¦‹Èà¸×Qf!¹ªQŠ{oèeœ{ò¨“ ×"<ëEo?ôÃº‹nQ¸Õˆø¯EsU=ªÕ_ÏTsÍ"#å4Îõ†”{…+òù,Ô*èvõKÙ¡ãä½÷0©1&y‹´-FÂfXXÓ¨ÆI©G^Ê|èá~.¾Ÿ‰{}‚<÷Å.<Uº‘z;t!¾õgE÷ù9áš³•<hs…`¤6ic£¾l¢ëµ•æ
fa·è3"eÜÍ„¢ç‰J,òtcİ)kåªË]ÍşZdh–rPNqÿ¼H‹3NL¨Z¡1sG0ëÛ
›†“6É-ªR4ÈM	Ëø·"e|a!$Lf'¢qÓ®´ë»
«Ş®ß[ßWT`İ)wK˜t÷Dæü:õèsn¢D–©Eá¢İewÉI±RØ/µéÛeÇCó@`Œ»°NcãØ,Ğãz¡a¨Aï©ùg°·à'¿("Ê§¹’;Ê†ùÈašf®!¯¥›YsÁœï¬·õNP…b¬ú¢tY/>¨ÜQßü±óõl, Vf<\ê…–f7€Òtn—FÑ:MO5ˆ1CDô§`Ã #-Î_ºbÔsûĞŒc$/c0^ÊÕ&¦Äv¯ºµ6­­’•½M±Q¹Ìãú`õª6<øÙ+Ú&”¶ŸÙ*6€ÒZå®
ìMÇf;ËHpoØ¦ëè|¾‘ÛE5Ì%Ê¢}sgu'ƒ)¬ÍyP‰©Væ+IŸ+“û#BÏí	‚?G¿íù}‡AÁŠ²êÑ+ÄyEÔÏm´xÁN±"‡Qm:§Ò¦z:CüÂÏ} k§^¬v…}Í¡G<‡¶r_¹¿aÕ¸VlÚ½õn±)ûj¯O@AB€ˆ„ÓXµv!_ã8q’@,srÉèåˆ4úù`Lš$˜7”‰n-st‹jfxÊ¼¼¿¹½nYo¤’sÙı•“ïüRP@Q^èíø;&™Ajú€w„Bı a”2I,e”öÓîn=Ê(ÿüıï.Ò…azá¥şq²¶!ï÷Ï\gÀI&KtHæ¤G)uÌ÷İÏÜáe¿‚m—ÅZå‡º¼ûrøÂ¿ñ¬q,ç>	~ŒºÀİ[ÜÅ]×ùw&xÖ„zêE¨}”úË"”ñ=Ô—Á3AmŞZ­¬ìoZ¨¶îê]ëûkûÈoJ»J·¨¤97	şÿÿ?t+È4ß€h÷IÉû6¸L^Ûè+¾ÑÑ˜òu	«loìå÷–ÒÎúå¢%Ÿ~ê¼o…ÿ0˜
1C¹¹ÿÇY—ë–ˆCŠ(¹èYm C@©Å7˜“p±ÛÑ1ól ø£Lâú‡’M¤—O“÷ïÜ·=B±TLYÜª•¬:»v¿X¥¸l]R…Ù,^ìÑ¢Üg]!¹¸MaÆ<!zÄ¬t>=œ$1Ÿ3Æåa¦‘şÒ$5ÆŒ<ñ³ÊY Gú–ª\ˆ }W~JúßE¨åìöÃWÈbŞ>öú-ÉGøÎ¥çğø·
^ŞAğ4ªˆêÏ7µà»ÄHDŒ mPÍònvKŞXn¤[9àF›Åy~é_1–_^{µ¬1]£)¯kmvõæ4—®ËY£¬•ï'¬¿qEÀY#gS¨L‰Tî:Q)î¯îhÚk]Ä‡bl~Sd®Ìns_ÿòuÙ–¬V¨À3¹­ev¹*©.³JVÎ*˜üû×]=m”â¦ C42ğ¾¼%ç%Õ§İ^ßŞèl>HKÖ•½‚™âHÚÊVr<eH×|¶"«È¸4ğsqô?^°W/¶
­,#ÇíŸÊŠƒªP-Ğ€Ûë{ù-9—İÍbôÜo‰DÏ}öb°]øNømİÛXåo_˜Z¥L’zzgİ½¶­İÛ˜“ jf[wê«mSHÀôˆ”ÁÍc90ÔLš…Ø õòîš¥ÔQî*X™s³£ë0!Ñ? õ±†‰f²m½]ÛÕ¸6êä–´EÖÒ,İÈT×ª½•Ëüøg	aÏÃŒ°|˜b]á¾+ºĞ9åwDHéA±t±õÂŞæşz{ÃºÖÆ¼1IÍz—®³º6ä«ÒjIŒ%_%¬/Ss}C“$ 5È.ûÍƒböçáïßç™¹oœ‹5²N» g¼Ì¨v–-åÎŠKË¯Ü¢ÖûúG]hæB[Ä”+ì'2,ÃÈLû§É³ˆ"vâBP”«"*Öü³s‚”÷û"f±3dÙØ_³jºEL^o”oåImm[İ-¹»îÄæEÊø&éÂ”«¯×—rƒÜ¥İ_­äª¹VV…ÆYŞU3Uå?]qdn)íåÍúİl3¿µl(Öòµt+[Í‚B¡Ş_ëÂ8b$²ŠíàdFt»Ø¨ËÙôÊªÚÛÜ[ßÖíêwí5Wé<uÔ_áÒa"Ì9VéÚ+NUaCt¹‰´—÷6+çpeÿ¯Hß?7ô9©IR¥ëÙ-`ü»:g©¨NW‹ÁP¼Ü-ÇôË*Beß÷Ä£«¼\#ß*·¤vP²ºİu›º»bÛt¬vÕÍ½µöWİ„ş/Ê…ôË˜4U(ªz˜\V%®Ltr÷ÍU?ÃÜ-•EuT„±Æ€!HÓ7Ãg¸U|õCiİX¾.€û¿‘>Íø3‘Q^ˆ¹Ge]+‚¸“ğùz¡ŠŠ­Ô]ëèù“çÉVÙşUeMS&œ‘˜Á³8&¦ÀdlJçX0°t6­MáÖX&ñ³°ÒM³Ru~øç€Áe*¶2 d¶Vm:PŞ4¢ZªR©i™•ŠÌWÔàz”qùÖ-$¦5ĞE”bL„8gáil=Iyú¡!‚±²˜XıÀÆ£p©Šò/D¶á2`!k¶·%w¯µK]•!×ÈÖHÄPÒ=E»ä^õ.[[¾¬ÍßğÎy2]óyğƒÒ*°gNÇ)a[)5bxÂÈ+gÑ¨DhYµSñiøÍ_ŠÍé“.·Œ2–ää.å¶Ú¡`ånLC©²èö—òêÚÖª›Sœ3³ Wì@L¾¡á•rÒ¥>©ûz,¬}ï8ÜÇ3«¿ó_&>æbò1ĞçÌĞG‡F)UrÆìÉ’FìîçğìRSşÇdçÉ^HÍ¤™#/[`ÖcH	ò|`ëÿ4Ÿ¡„ñHØ`ˆO\.ë˜Ë)c%íê6HY§Ş,5 òf¤d•VKÓÖ¡“ù‰Ë]"(êŞw×„‚‘×Y€R€ö‚`âET®³ğqüPP¶­ü3˜Ö!y3¤Ÿx8À^]ÎÈjrôD›¾[l.³µ\-o¢Í 6ÉÏÂ3²O\NmkNml¾VÜGa¹’¯r¬µ+±*ÀtÑ8Tï3(h`³ÀßaÄ¹J¾F³’êšK±›c	SºQ¼t{âOÈóßâü˜¹#Ïpi’P»ñ0ƒ‚†K‚ã—RdŞî:„@|qKbPÓfj+SÏm‘-ª’a{˜Iƒ€i‘yû2 Ó´ÖYXé˜EzĞÚAsÏ"Za:-Q,Â™	Tö´Hkïæ–Õ–®/eM9‹‡R3È¬ÎêîÆz¿T+`Ï\QFmÍ¡Áã»Ö¥ß+í«İ´l”½uhdÛj‹ ~H„šĞ‚B+Ï.›s&ÚXìnngŒ*Ãr¬dwÑ€Ì§¼~Ene@/Í7)“”—²ùÆzG²Œ®çê“mĞ‡åÙ+fÏ°¼¯Û^ß/šˆ
m’7©æ2§cÕ"©¼´*´ã9‘v,Ê°è;ÊÎêVnwu¯äÚpmbxp%%‘6­ƒ:7ño\QF8;‚ô!Px[Z³
,‚vÉªÜ×:6Òß€g^Y]½EÌWbñ,¾¥ô–Km,Â<XzÉÆBùöÊ'wƒÏIÛÏ·Ÿ›¨ğùWáùCí®~›j~h¾vÅóÂùğºõÆ¡œGŞøÄå’çÙ7~â|sş7¾‹UºFe\¶¹Ìe¸O\¡‘¯¯ï«¶Ëö÷m™òµ’MË[Ë˜Ÿ=ĞÓ8íp[°•L­ &A=’…¤Å4z‰Ã(\€Ì±Mé–[àÂ@ÿÔW®HÏøÀóŞ£ËÆÏU·+xùÅà
á–á‰e
œibSÅ)ü…/ Iyİn®½Ò]µoî¯î*wÁş±¨jÛf“2Èœ+{›ß?|óŠ1_h 3ÇÜ'€òøg.mr~Ù¥¸ĞÑ3“wÇŞ7¿.sèdÇ|~	ÁëP‚.vÌş×ø|™v¼¨{1&<iƒ@ë;‡['q[\¿Ï°Ÿ¸|‡çWŞ¸_Ö/<µèùëõ]×Àõüûôâl-ÏÒ¦¬62Ÿ¯:£„¥[›íÕv–JºóÀ,|–9O€¬’ÜÓ/ãMX>70Ìô’„°v´Lè èt‹ÏØ#ãÚ#³ÏÔ²ur«ÀíÊ­wÊYSæP09sºUşÿ£GÜÚ#ƒ¼	tcQ8uû«˜æÊDÚ¤id]šÒ¹Õƒ=úâG½G¥êR&ôüAl’€ÄâİÏØ#şíQ¬P oI£¬^Ü_ÛßØ×´7í ƒ[Õ–¶æ¯;GWõù¦E„o~fÖ-Å$h•å¦¼F6©†œ—X”,U‘V©J®’á…ÄÆ6‘2á+Q!ê2lÊLi£ÊVêèÚ«îU‡ÂÜ×D·MÉqEF‚Ï7`ÍÓn¥´Wj¯¹WİëİîZ5Ó*œ{:z¯Ğ¶X%#7eL +ï¯·s¼ÜXàõ»zj›²
ívÅC"íøÔ‹‹2¶W::s®J0…½M»ŞµiWZ»%g¹]î¬Ú„°HÏ>9SÒLW³íl£ÀÂì—ª^
-£¨·S,<"RÆk·CÒÜ´‘œ¤¶\—¥vÕb§¼³i[ßQÙÔ9oT¤ŒE†ğ;#ú~¦9™YZÍl­î­ï*:jC~+o*…ıÍ˜H?<wûç0™‘Ê@‚Eº¬SçV•´æVâá£thĞ‘;)"W¯Ú¹¸(PIòçB†aPb¤¡£%ÄzÄPx½]å8NRøé8~œ<NœEV ¡1™ğøaV¹EmQÙ&Ö™KéĞ[µamò8~™Yî~vÌ¾J‰¬ı=ª}¨¡Û¼‘xkÅúàâgä`_•Õvygco¾‚MïhA×avTcúaÆ¼¼¡‘Qæ=òøh—:5N
æîç¨’QØW¾s¸!5¦«RVb&¬*û*8Ëî:”QÛ×—Mşsa+Ç©Yö, d£tjMGAŒúïGT6¥UéT…,“Âz‚'ÀáùgÌËéÒ>tÂĞŒ@—Ô•Mˆı©Qèîgû	’nF„,Îåéæ¦UaßÜÍ¶(3ÊšÄ´Œ1­ÜV–KŸç°Ï‹”ñËwÑöf[¿“iL®%«g@ÈW¥ŒŒ#å^×}#<S1¿†şû\”¬Á;ñB5ŠÈ®˜Gh„U8O£¡As(ë¬j§Æ®Ä§!ÌB:Qæ™”r/1-MR'IÄ¢¶U¡½sœbcoŠWŒ'å
Æl[½³fCr¿ÜUØu`
6ÒL™çfñªHËüœ®%Ö•Õ¶ª¬„)V2­|3ßÈ)`Ş…=EWÀ")‹0•E~–z–)lÉZ4OUs»+C½]îji¯UĞSÉVEÊXäõd(£œ¥ÙåeÒÂo7ÀÈWÛV-j7ŒYZ¶vEúòŞİlGŸ©Ğ5²Bp :AİòFF6³½ÒÆØkxfO¤ŒÅVƒuÃ­²«·W;kv­Ij¤¹AmSØ4–=°.à™ş'.#Åƒ\ØÏÌkóòë²àß­°+\Qq=ÛÚì¬ì¯TÒtÙ´‰âI>W'™Bs¹[¶“xä~$ÂÓn½|şX@ş»h“?è ²şgï	È¨©`háÜd éf`À×<¡2Ú-‚]'¸}¸õ˜ÒÎ©qhìZ§Ö®séè‚‰’Á~‰aßG"“caíÜrwİ¹‚ĞßíÕ®§İÚ’SÓ^ßSYˆŠ@@ã+Æ¢¯¬ éçZ´‰¨Ræe$œ¥ÔŞÜ-ïk·…àß‘v|ÏÜ?½Q0š2^^ÏmIEFjÃùXİÛ°¬:´Îy ñD¤ŒÅi(#ÙJÎh#a*²Z†/šruÙÖÊöf“l	'™Ó+Ê°êxÊi’u‚]6‘š/TrÕ²9†2ç¿Ï|TD\”Ÿz¸¸¸èã{ï„î¬™BFÏûµ]c–c±«rÓfİ^É²
yio½Sªùb‹ºŒáßTi…”YæC³(CÎÊıR#5I|CöĞ3¶„OÂÓø!G{FÂ:F»È$ªvË9öùCèÌ³ÔGäI\k‡Ï@&½/D²CtqşZ‘¾/Î)²ı¡{[yFj’Ú×ÜeÛÊÖru¹»±]Ş×¹áÿİU·rwãaÍw×9t¶±‡â½¤Qm…hCßs÷srJÂOşk‘Õú`ŠÁûF}İ¢ö·éÔ€n†çÎû+Ívº%İ*ri–ürV÷¢ŞŸ+s/hJB0 XÉÂééÜ.€{q æm°²áùçiÔÊÒRsç)Ø‘`0®ö¹3Xò$z¯~ë<@áG ¦oÔÛ=~õÙ¿ºÇ¯0aÖy"r²£;Z\o%Ì m›{ÁÃ¥¾“»Ğ´ [ÎÓğiXHöÌHÍ‡K'‰Ó|
p¾)<-;ş”ø·DZ¿óÁµuc³”“gŒ‚Æ‘#gú?EÀ—œA¸0Oˆ¤°n‘üßŠpÃì
Áº²½¶W0ƒí½k¶±nUí¨vÊ°áÀÜÑ¢×Í÷ê#ó§÷b±ŸF	??‘w#˜ :pè¹(]æ°ÚH—Æù³®¹ó¡s'`T"(MÁ-ªN}xŠ4ëÒ¢-ò]"bwl1Ì1Â½´Oë£Ï–n”>íı{"Cğ_|è~&zsş=¾s´!ßº³²U¬­Íõu‹–ËV@@rt#ÿ8CÖ»@8lçÍ’Œ”%ŒBŞ# âŞÒÀƒ™$&e9ÁŒC)…ã4v›$µnŒËÕºõvX† Bæ9	"Óˆ
Œ&=¦¹@$‡g1Œ¶>ÏRg1•k?:‡óJºtvˆtV·Nğ§ìqáR Æ°Eo;cg‰YJ6KíV»iÃÈ‡›Hª?oJ9‰‘àF—õuú¥{}ıE.­[eüÏïCß¥0GÿŠuò 1ß=4LL.šKW	>³•«ÉQq7Ñ`ºæYÊ©`³çáÊ±_;:‡iûs\Ó¸HA BüĞGšI3í8ƒø¸S€]4âY'$úh˜02TcbWÏ’“¤Â6O"Óäi|9MàîƒŞ&e†`â
á:¼Ì@™	óA`†÷‰èl‹ÌÒœm–÷×]*0©jf{ÓN6)àlË°˜ç»Dß-RFf>*|¾U¶aÚÂU!­h-i5[+ÕJ •÷tüñ="ºÏ—ãõe.4ËİRwe_cÊrµ,C7èh@vån¶"åÒÂÂ.Ó>(¿›¯½yüa–rväCˆHß6-BE$'©i¬a"Ì:ôªşÇ"äùºş~I¶ O#Üïy'rË{óıü½FÚVºšNi/ßÑt”»z‹ÎµÒ]ÛUî­l¯ÚÕSxæ{E*\ k^†uÀfkƒJˆ±Q» DàĞ´r¬í™:íR?¸7CÍÿÆÁòL½PÏG"ÖÎ÷‹ˆ¹‹i4bw"o­X7/¤î”ß,MğÊ¼÷ÿâ™}9Q2¹f–U2èµŸQN˜rL¾^äu|–ÛÛ¥újÏíOŸ·ñ®)Ül <Ñ±`–ÆÑtEW@TFP¡˜›ªQ=æû_a„T’÷.îS„áıõ:W¿¹ef´7¢–å×bo¯ÊŠï®$q³F%;ú¦¬şÄ!½v½kè¿¾s#ØsÉp@TUµk=²ü‘Ğ›ecÁáoëGO}”õƒP—Z¤.­°4E&à=÷ÂšnõÙ¨>÷áÑ3MåÉµyIÓPïKFÔkmWõåü­<»ùæìÙös½—úoŸ¾xøÄè(ò’­§m%KÚ´ãLİI=ıÚéõ–aİ\TòOàõC—4€| {DÖßõó»O¼;¿äóşZ\¬7ÍŞFñ±¾Ë®|döô‰Ò~ø!3ƒªğëû!;¾£ÏÉ›×Nµ™¦£ğzïÃ#êçİ„nÿÈC~Kâõ£w§–ş«ôšnÿ…µ²oZëøú©v	nı³K~º¦ßG±ÛAÓ†~ş|÷…³{[¹÷L¿ Oü(”@_RùÏJÏ3nİ+Á vu[ÚíçCOô_ì?Syú¿„ıóG ŸôE>ëÊ›¾'åıgwõ|
^?ö7˜‚¡¬ß8º^×lÚÂ®å×p*ÿÅC¨àÃï'¢ë“;D–×ŞwÈÊ<ñé‡”’üõ„;æ.;–cˆßdüoÊ*ÏÎpgş_>¤Êï'İ®(J®¸-wüã"dò‹×ïMÑÛ"¤æ®ºñdè•ô«Ñ×c×L»ƒYÄî$oGnåM6öZq|½A~d_ş«+«ô\{¼*ŸZT™xÙsËïÊ¼ª­>1ÚpÂ·?)2H]øÉs8H;·¯m¿qüFç­±õ`
¯ûÙÀ®¾¦oÀÍ#òãÛr0ñÇµ×oo¿Óz³»½S¶n¥n&[7Şxñì…7^ºØ^ï®íøÁ¢õîéìJö…·_xÍsëÚ­ë·Ÿ¼ıDÇg½‚•üÔcVòî³§±iôÀ»Wr­@%¡á5Ëª³´çE¤¯—Ÿ†®½´_ë¼8ÄJ~ú1+y+y|ãôù·’5Ò¤Ùô½½¥}­K±ó19zª÷tÏw3?[yâ+ù™Ç¬äøÙ—¯=uË×İp¬Ú®¿úÔôÄ¢Ş¯½y;õÎõÃø;÷*ùÙÇ“øqìíøä9<•k„§ş—ŸrƒzË=w'5MMÇ/Å§)ÃõgfXÉÏ=f%¯Üx7>‰½ı¼9·µº¿t8zÚEWòÍÌUb8ò>ù‘8ûRëú)Vò™Ç¬d²tpíí—¦Ïq¤IRMM–‚»JUMyz‘és˜>ê°éùÚÓ'XÉÏ?f%Ó¯>ykéÕçÍË[ÙfììÅ7RÕÒîZ;tøÄm ­[O?ôšÇùôîó¬äß>f%w^|+yê{÷T{0Hg‘·_dVı÷æ3/?wç©›K·ƒÖÉÿö˜•¼óüG>üöµƒ'0@×ríeÏÁueÇ“·¹éí?õú7?ôÎ³˜Ñw+ùÅÇ¬äôÆqò,um¥wÒ­èi|öWä4¶ë¯ûŞWŸì=uó™^Àò¡î‡GXÉ/=îœ¼4¾yãÕë¶ÕıvèàÉL¼Ebzvæø:L¼ñÂ¤ñÅÆµ)VòÙÇ«$Ò{fğÄ Zì^ë(­ÏÜ|æ­—*÷ºó‰ƒ§^æèúíg¼£{•|î1+y3|úÂøÛ/–YeÇ3 éÍYşÆä¥ÛÏ¼•xã¹›×Şº7'ŸÌJNŸ=~áÎÓ7ÛJ†0?ÿîK'Ïš4œÆ	ü‘ØAğæ‡^ñ½üÔ¾×¹‰•üûÇ¬äÎ±÷fàè)w©³\Ø×îf[4ûÂï<w'yš|+ua¸~ù1+ySE=÷ö5fÄyş]-õö†åÚmïík·}“øĞóÊµí +y+ù;'/co<ÿ‘h‹®R@ÂÏŞyÓš¤[ññ‹o>wöáÉKÇ‰Ù=ù+YÉ45¿õÜ›‘úF6~øNlmmî”º¾~àvàÖ‡ß¹şnâä…­z+ùÕÇøÔiâÄ,ÜÀPñØÙoÇ·VìÚíÀk/N–FÉ£P/<;çÂgPÈoˆ(%?¤»§Å$º¼ñæÒ­ÔÂY_‚úÉoŠô«ô“û5Ï—v$umhGº§ÃúÂãNõiüXfÕ”^zóÙI²Fğt#üvøø¥É‹wâÃø{Sı[ËHÂï\ç…“ø–Ì,¢}ñ'230÷¾ÿ•ëOŞ¾>¸~ó|ãØo‹\¬Ï¶éÖ²‰â
eƒ´!5ÕL…d³UÚ˜mJj…Šç÷w®9¨æ«E´«öWì+]µ£·éİë.ıŞÊV®)ã	,ãw¯
[(¹×0`ÓZªÉHjdSÎÑ-ÒHmI	+8ÒıŸW•!7‘[Fn¦[„Qe!˜LC^%Rƒº½æØ´
Ğm¿wÅ±6—æH»§”CkAO©‘lQl¾R¬c¨™à8öûW´£¾Ş-2‹‡ê+V…U»[ÚÙØÛpiİ4—Áp,ãÿ)ã[¤óİ«\=[/ì):«m}'_Ï4r-Y­d‘T…[szşXÄsÆñÂ½ïº¯H$Ÿ”`,¯G|ş„Ş¢¶*İæ­%Ï'@ÛHÌ„QÊií³èYøñÍğÄ#9á!İ,vŸ¢Nìïaz;ŸÄ18}nNã”êü§ğ´ã8¥µë0?“Må’³ˆ¨‚˜³Ç1ÌŒ6—éĞG³pß©±#>°Ò%´ı‰È¸,ßZ;+ízGmÑv×öV:ö•İr{Ã¡î”wÔû½şée4ˆZ×ïåënP‡0×Íbµh’©æ¦KŞXÇĞ¶?Ùq\d³]ìÀ/p(>zƒ–|ú'ß¾Ï½ŸÃ`¯¼£p‹Ş'tKİ¢ÏoØom½¸Mt³&oçìÏgYç‹É77ï¬]š7ş;~é|‡íª¬¹)DÑÆİ¶Å}aDÿâª-uå¶r¹%kQ[Ù­+" Ãx:dµ¹3È—®(ƒ'êë;åîFGÁd›ewig­«ßÍU%,Õ”»tæÂÇà™÷D¨õb~àO~--Á\Âx€‰‡ã.ì	~ã%º¼œÃ1êm‹I<¨DD”Å"ºÃ`è2ŠÏ³õ ¢0æÈÃL:ìqÛáşû¼ÒO^½Ï›øHêVà­äËD–÷™ƒM¼âi¸/ûäå}K_È$ô‡ÿ!äÆü(¼Ş¦kM±cmÁ¼)ê´ÚÜÊƒCX„˜$†¾Q:ôJM2Væ!ÍQòØ6ñõ0w f .uU°¤—´Ÿ:N“ªˆ6©Šé\°RY"p˜Eô°n½?Á˜DÈ“¥RaP'”VÂ¤51ï¡˜YÕÆ~h”§F‚U:eŞy°4±‘vµ]>Ù®7K=Ñ™›öĞ®IDkUD¡ÖÔ4®ˆ:)3JÑ˜™Ò¥± Ê•Â©NGÕn½]cÑê®‚ï1eLç”±ƒ <Í‘¡‘_°J‹pHUÆgvnhĞ"ãù™œí'~’<ÌÌ$ÛĞÀ»=±•åeD_?Lo>QFµEçDLuÌœÆØZr"‰a„™²üG8‡
‘:ŸÓ_p¸ñI…94ErDˆä)#”&ä;q»OR˜‰ùáY¤:\š8Ç.á•:ãÉ0bŒ~‡˜=%¬Æì¡@ßÈMµ1¾ìBIñYô$~şYá¤X’—±3ôJ g2b£ÓÌÿh	=‡>†¤™¾_È¶æ—Aù°zÊ€ˆgÀU3‡Ò5/=¬'gaex;†ş#Ïü{‹ŞŠÙS TOŸ9ô&9‹x„q°úüàŞïíª¸2¥ŠMlúÄÔvæR;ô¶Iü,‚@jç4¢p1·„šùÉËßŞ\d~ĞÙ´ûåímX7\ªí´AÒWï‰`×"–æ!k·=€Ö÷JüÕœ#Ë‡nÑ·è·nÀ­ÈLşò…Õø°œW‚yØĞ§t'à^ô¶íyú˜=ñ˜ÜñyÎ­ p—äâ„³ccæ|¡;r9/2£ëÄüû¤=IÌ9g…u†æ9ÂÔ#ò™Ÿcp!'[Z¸o,r…B#ÏŸïáïæùÇü.t7<Š1w/nëEFæ¾í?@9&®ÌÑ>w.1Íğ|È0ÿüşÉOŞ“ ŠuÅd÷KPöÂ=±³,ûå4¬ÚÈ,qè=öS“‡…v°R›Ô¦Š#:4ñƒPŸ×G4‰»Ÿ… ÖO><·N›dÎçf3ÇĞæº_uWÛJFŞÈ6Òl‘	Á§W•±Ü*a9ëåvy[Ó)ïƒî²¿êÖ9ÊU{Y>)ãÏ_k×…æf{sOi/w×\kû«¶rWÑVºäÙ$Ëçá!/ˆ”ñ±¹×qzÓ(V–›e§´ÌÖ²!Ã(÷W&€-˜³XÆ‹"e|£i>¦S®±¾«ØÙØßØIï¤9IÊ.7¨
¹µjÛti±Œ—DÊXdÎ1ë;›­b%[‘±¹Áimúî†Ú´“1È9ICğ ~ùŠ1µj÷•ûZ·j'S•×$LÖœº+òùVŞ3HMË¸ƒÿŠÛ/È_}f`\ôÈ;š:‰+ğÍ«"¿–]»÷İ¼§”à#ñI˜¡v=C“x4aÑXT1=Oø†!Â<@ç]ï±]c?Ii¬zæÜ=^€~ü}o8ùÜë"|‘x|®¡ïfº×ÇJ³Ò¼Á	”sKd¤Z™™âŠÕµıu›noÓY¶—JwÙ¢r”kíMÄ²Ã2n_Q†A¾U4ÊÎÚ$«dŒ™š„/ğºÎ†k¥«rèİ¸Î›W”Á‚t®,W×ª«zgÃµÑÑµW26[K·èJ¶%¬¤·DÊX ¤ñ$Öh5İ¤øÂŞ©hg+ù†Cå+Rc“bpşÛWhpx˜‘|yéÕĞG<÷4¸8ÖÎ^ÑËz[íV8d\¶^Ü_uèœ Ó¸õÎÒƒìw×Êğ÷¼5¦;sÈ©Ñ±_˜gËfi‘9;roÁı=·LXúy¹ã8P™ôŠ¥Ï]O…Ü‘˜1z^Ûâıÿ£î= %ÉÒòÀŒˆÌHŸÙŞÛjWÕ=İ‘á2Ò¾÷òy›Ş{ïóyoZ‚ƒf1ƒ@+aF0İs8	 ïÒaVHÀŠ!ÌÂÂ‚`KíÿGfV½®~QY]ô¨g;OvVæ‹¸÷Æ½¿»ÿÿ}˜'æKÈçùÍVe’BŸg„ˆ–ÿ7Ã9^•~ŒQ¸?l¢å¸©'	åß¿GŸ"ó!ğ¶WOÑ«ô}æê|1^£Z"õeÌ=&Ô28S=ã ï²6Î\Ïâ1öŒnS+W%ÁŞ3^Usôu?K(¸Ş'…ofĞV3 k”Ø…qÆ4]ŠGºğÜÈ¿‹ö(ÖË`J¬Z9ğÙÿ.‘Ê|üjê’6ş
RSÄgsS¸á)Yœçkˆ©…õŒÌ&v÷ÅŠÑ²q¼x¶~¼~±ˆ'û³J©öí×ÂöØ0óÈ |¶6¾Ãì?[£—İ©x“4ÓpÁb¨rèJº*â‚‡jÑºNa6Tòe•6Æˆâl¸ëeüV®Í2±tè«ñZ¶¦Ãm¬leB`…ª¹f°uĞ=¯¯Å†Û¯®A1Yƒe´k*c{vÉ~ıË_%4ˆŸ) /òáºUrúœm\,‚M.ÛeLÍÆ-«aNªmÄrt±†	|híSÂæÂŒ¨Î¡ã–ädK‰`_:öç·æoÏìOe	Q=M^£û|ål,Ñixs´Çts­TJ¤Yğ2\è]] ÷ã¢mŸ­Ød›lÂÔÁõ{è‘fO«@¬ğ¿U¶»Ï1â´=OI;óçË0;V÷¦¶¿¼ğTtw
¼N–à‘SŞ8ş*ã?Íq¦¾U Ñ†5¸Óş\ËàÍ4MŞ‚7	ë•’:ĞmPV¢5­ ãuD‘v„$mIË…k	!*Ğ5=§Å•ıR’¥÷?R0|ÁwÅ¿c¡‘©gÅîEó|~(­Çšgj§ Ø"Ø\y~ä¡`<FÑo#î¶ä„Ñ–¢àeƒ¶gbµP-ŒqXöÑl„‰•Ó•¨Cí˜¿Ç{T´ã}×¡ªo‡÷{ùï³8á>1•ŞgqåëÚz¤mğee„ßI,N‚A*%WRñ‰ÇeÜèµ{`cä´œmgäL×ØÉ´“;XfGíŒò‡°3&ê»´ÂÀ…ì#MÙXf¦ S4œ^Wi=óüíß^>$4È˜'"&ınÏ"°ÕÚÄo—OÖ0{¶3mãË[ÈöN3•1y@ƒ(ñBÄ$.ÒIğ¦ã.s—“¼AÍ»ÓğF|şiÔZ›sÔœÂû.ÂÜt<FÍu±r¾lt]Vq|
‹œÌ#02ié9mÓ˜'°pé5ö;³{R°¸¬n,c1øˆÏ©¥ò¬Çu­uM5VÍ"Tf5Q‡ù)Ñexö­l5OJ?Œğ·'øu|¨FI‘ZÎiduhÆA¦’îezö¡c¤†‘ìÎ_ˆ5´ó=BÑJ´¯'¦¾Áikœi72¤+>YWeÎQc‰ëšĞu:&wºkòšAFÆkZG´JW	^ÑŒ½	Ú•1z\/åÔ`ş§/Óµ6-ƒdÛî4°á*ÑP¼•¾Jc–Ù’VH4°¢ƒeM….&]¶AÖg–‘İÒêË9•ZáÊì¼yiîÒ¢Ô
‹»J	ÛÅòÑFş@¢É§‹ÈOoğj
t†Ñ±:#f(±vÈo³És¶t¸qºGrŠ=ç<^=_¶¹í22ÎÃLYİÃŞlªôF7z2b°Nu`Ë>»æFÒgó§Àßµ»ÉRTR8I·TÌ7¾:l£içÛIw¾éXym9V¥‹ÚZ˜ÑWbå0gÈÎ„Y&iëù–¡emæÚ‘v¤®ç]ÙVŞc%²š`X6¶«2ªãwüï°Ojğ	Hz‡QÌù=X•vë|	Çøhõd´Ç2BmÎîMf¶ÀZô˜ü§E¶ù0#áÓmw¬Ÿ­˜¼Û4xVñïV´-ÁSsI~JÇĞü.›Ájëpã °³°3¿+šğ©‘¢²ÆöTz_½1šÛæf²…ã#5¢ôåH)V²¹™“-½h%àû*šúÙ	à“xêeZ<X<˜ßZßšÖø5N»×ä=Ù8Z<sZ7ö=k”+Fì™£}FŒ'²ºY…w~^ µIï¥òF¯^³´ƒ˜¡Dí5£  aüY-]äÂŞìkğŸ,ÛVì+vŒU®œ`Ñçª]<àhŞâ5¬úlkfÙ²tæ;\:Äq;à·@ªRóšŒ‰ïq
ÕÕ†‰#§vYı,á<ß0.ŸÍ’ğ\·¹ıÙÜ{	°)–#0í }¿qÑ*lHĞ'2ø·é8XØœ«<·Íî,ï,Ÿ¹=&×…×R}÷d¦üf¿mÃêÿE6®xOWl«çKvç©Ï¼v´qàØœ>Ü@Ñ³Õİ™c7fihEŒ¡À]²¯íq¤D0d@'íÍĞ³ˆ-¿5¯>Ÿğduw‚õ»¿q0¯¡§v§v¶YÍÌNà`zkJËîvg·çà	9€Oqwew^Çh¦¡ÏÂÖ<XAËÇK'+gN‹ÛRÁì>wÛV¶gvVá…vÂ¼æA—ª=¥;Ÿ"¿)î:v›B¶3£×ÚŞšáª¹õ€Qw‹å{üwâÒßµfİ%F¦•U­GDŒÃ¨Wú…~Úm“Âµ¬W‹X²Åäsô™«3¦13ªïHçÔ7õEKKˆûV_Zã€Üz¤>- ÅMÂóWó¯o¼vG]K?züÈÅ{Ïï>¹õÄÑS‡>|ğÀşÃûOo?{şô±©©Üüñµ ¢ÁÖÌ7t§©%°†	'r·|“M« ÒSAúCc$—¬Ê½miêŒÉzÁcnfı6·ePè%»ŠiöÊ}Üxt4ˆZpñ0ï8¸Îä «1Qï7¸l2!D+
àWOR×‰ª¾ë%Æ^Ş•*éŠ¤j«9Ùä‡˜QÂŸ_3I Ó5šÃL¸­„¸Xƒj„KZpA£àÜRÃº§¯U1r7˜
ywªiæ(‚FÈjè&9½¨uH)¢ÿŞ„ç"ÚD[/7°y´ue{_Î”õ ´)—Å›ég–¯‚c¾QE´~’¿h;<8¥a¸5k//éó/Dw¥$VË¿ŠÓéòøoì`—Ú¾»êÚx5üêÒkªG¿ÿøæ÷Óä°ÅAJ9]Æ"ağjgkFùpyX¼}ÅË{¸q¶¦@Ê­œvf¹>³?{z9®¤]gõqB¹>ò… ¿÷a¢J¿Ç‹JTéê¶Ô¸*ª4ö=‹Û­	ş‚÷ƒ‘&c7ãË´#|Û2ˆKúrÜAµuª¡+éXıû‹Ç×xæs·‹‘qÜDŒ'ÙœÃŠ§ù­…í9%KaÙî´¹`thd–‡K$ü|ÇYÜ}ÜŸÂüK

°/ò#ëß°Ÿ_hÑûÁò<lñX•t[z`9÷í‚lo…x})XG–“Ôãâ@[;.$Ê1IS!Á÷H6-Bˆ‰a6(ÆÌÍùßTæÛ˜×äN^Û±dp08škİºjtQ<Ái™}~; ÷#¸–Ñy—.6Ìë^ø”M‹`WøL.›¤“vZÏ¡l_ÚšÖ
; {­!î­ÙW¼6Ğ¼¨ÇÎÁŠÒòÄÂIXµ^°Ù=6‰öç›™2ˆ–jZÓÕµŒÁkí+böÓ“vª@Õ´ ÔIZì×F|(‡à³Épulãª´1fSa.S7ÙÍôÍM³ËÔ/4ò^k7İµ»mƒœÛŞV<‰ï˜plĞan§ºF–rçz6?Rµ¦º9ÙîÑqáâÈ³úÌû×W#]×B%$Ñ$Y£ÛÀÄ%»7[‹uGûïNh÷iyRˆ8<U9âEÊmî[İğ\\è%*û/ÿDETİ8Ö¤gõb9AUÅ
tP@N%Úûy2ß­ÒÆwØkÑª§àÿ1)Üï3xìİT;…öµ#ÚKbß£ÒÆwHJúr¨-G:™
İ ˜PÓ8@( ›œl‡;ÉnúOà˜ï½<ç_¸İÆ+£9?‰ø•óVÚ¿ÀİÆ&.¤Îú‹eïCºİ¿SH)ï¿EŞBèPP!0$…fÿŒ6ÛçÎÖÎÖq3ƒdÅ‡)Fø}´™‚ƒö}‚å(U¼ú¹*kÙ¨ q¦J±RÒm÷ÑÁ*6Ã¨´1FåcâE¨kĞp#RL¶
r¡gëF¢ªƒE•ô*›g?8¡píN³‹’âUdŸĞq´ƒ,ê¼…F·ÎX¥9¡§Õcs"1U²™ìæ»É¶¥mìØÛa>Ì†ËñAÛøWÆ£¤óÚ|tY#ƒ½áK·n3—BE°?j1¨(÷ñCÇ´® .âºHƒE¨÷Ùåt;[6(>>P4X¥şøÈ±&x}=QUcÅP#Á‡Z¡’Î“ì=ÚZ®oï(öà¨´1Nun«×ÂÇd)Q!-bÒŒ¡ê<)¿Í¯„^şõ„68¸g1Ò67ŞdÏæÕ
ºåH4p³ß:0ú•„ÕÏMúĞçH`ÒC„@Wb\œÓI±jb ª›ĞFMÏ&Šáj„1‚ú³l>³×ä´:Ó0¯)Å*Ê˜şø„6*!ØJ÷Ì>Ü(HöÍN£?U"]…¾¹gö›Šù‰	mà”W£5m=âWç1¸ó‚/Ó
2Ò8sCÊŸœ4Z]ŠÁÓózÚä»i¿ÁÛ1$•ñø©I÷â<ô¦“‚ùjó‚Í_ŒÔô¾‚lõ]Æ¢È~FE`^£!şT/å±¹AÌöí´»Ğ+4ÍÊarè¹pEñ}~vRT‹Õ5ÕP‘v$jáR´D…3=³lö(ãñsÚ¨ÄDm=ÎAXšOô“>k7åÉ¹-¾L3X'«Š2üù	mÔÀë‚•f#ƒâL.{/Úµ{l£Ëê1´mn%óoTÚpR¥p%"Ä9¸¯ÁoJ¹àNµ-¾¬3İ-àÆ×/ªxc'5o|,~–Óm»/9°vò}ğHø Ÿ`éj°™jÃÌC"¦¦9®ÂHwl‚±MÍ\É¾Ø*.ñÆI[¨GFŸƒ0úK*=úÔÈd½'  ]…(Gª	ğ÷ô|¢¤)Å…H-ÔˆIúZ¶•ke¿˜  ¿7XÆû»´9¢¤©á¦ÉN`gSË°·˜â6Ú6B¡uÔ’pœ8¢Œğœ²Ğ2&ğbR/Ş•Î×ğ¯Ãşíg®FKèxÜ-uÜş€Æyì?õÑ¼eÍè‡dÉº~æ»ôZ<›ÓÏòÉÆñÊÅòñŒ†ßœŞš£zzºt Ô`$0…nÇ^Ú¡ldOí6!¶†ßinˆôE2
¢·°5 ö®ÜÈÃş*<)³/ò©WËíÖ%ëêŞŒ~öÔyë»çğ'à¨§â‚|‹ıı#õÂèwüth$Š·zÍƒ¬ËØ1v ËsN˜Ï±Zœ£+ú/æ\»ói+´Õ*ëçÃ°IÑJ¸D•´]ÉtóB''±n¦œ¨këº÷Ï¼@ã‡¿kHª‰©nœâólá&&XÂìPP½ğûxíáv­Q6ºq“­SeKwšıå`Ôªt%XÖû2h®F¼cƒ IH&TÓ–t-÷±Ú×'‡$¶82nl·aÔ62„ĞÅÄ NÓäÂ ÍÙÊÛÓW±”À‰Rk”°«PX}p‰Ï#XÕó~»ËÒ··¬˜.îˆ2†^ºgïÛ]©N¦—şbàM‘úD\G¨•p~ŒŞ«ãŞb*3Œ€R0p˜Î<.¤ÀùsGyóMA0¼—gå‚?üï*£÷UBë‰±jDŠƒåx%]óŸÑ—E–p6İ¬lÿbŞOüá˜jÜA8L²Ùi÷˜VÙà¶yWÏ×—6sşUĞs$³»p¾v²¿/Züğ5zí«áÀoc),Š®¼›;Gîûáß¿¢¢İºOF-‰–ö¹=n3°?M¹M0·ÍóùñÖ÷÷ãøì/ñ „ıÃa8”Ákâ»S[s„p«tm¿ÿ bOíGğËÌ~„"¥pÛŞNv’^{'ë3;ÍàÇ»ŠoğUìÇwÆéD-äĞyÈÛ3Èú,­ ëX'iX£+ëTìú_S¹1`±#î0{ŒlŒõ`v<#Š„lè[k×ÈúJ×¯Oò/4Ha&Ró
ù|ƒö:éA\"Ğ¿/+²ÿ¤Ò—1ø²¨ ZÒz¬„34ÉÆnº_¨GkYo²›iæwì7TÖĞ˜­ë^ÖP%Ó´v£ğªYYSÍúÓNBˆCe‚Á Nì‹¹†nIeaÙ¡Ö7ÏíNB²;í.„ï>˜ŞA›rzêJôù;Wë&Ì3.Ái’!yºƒÄÀ4Èl=C'‹´¶âOÿÖ„ç+|Æv¡‘wÛÉx-N#Œ¦¬â%˜qØÆoOğë%ºqD&¯¡cä½ù¶‘		Z)Z'‹ÉvDP˜şË¤6H!^ÓHGD"ñÉÒ-])éËÊ Ï°ß™Ô!éÁ—ÕÂÅTIƒ…y.…¬qPn{_‰Qüş„¸O™’ÂÅHQËQŒÑGWcİl/ÕÎ€ŸN°d58LŞş•6Æ,¯¥¨®È#«Æª¡ºNŠá=ˆZ>Ì™9ı!ó‡*I—aà?ÿ¬^ÙT°ğÊìµ»ln$?ÄR¦µãõÃU“‹©.–ÏWN—×;osnwŠÆ})AËaÚîØS—™ÿş¯	¾/Èpm£à²5³²ÙgX9º¢¯kË1–CĞ÷?VicÌí´ú’íd/Õ
VHğ€õŒ¡›ëØ[¡r¨@Œå?UYïw²@Üm½óñİ(4"Õ0«ÁÏR°id«Ëî3xu\ènšB ŠÕÎĞŒ®¸+lNïƒ¤'·¾/\|ú¯îò^<t–âÕœ/-güúZ´kmêºQ£Ê™^
îv—©=^‹¼&@;6O—Î|'·¾‹›Wm¬j´)Ğ_˜âªc0^G³„€[l¤ˆHÆF¿	»ÿBEÿNb´¼Ü?*RE¢¢á(Œ^IWŒt@·ø->KßĞ¶IÔ/_ÓrD1,Eaœmå2û¬İBÏæÌw
PMÏˆ!ı?î!ñé¯¾oZ¬N¿?s²nuŸ/|´CÇ`ÏÁ›:€÷0½7u¸¶7MI¸-w²„IŞÆa¼ò¯TæñÓ¼4B´l;&º“,id›œ©„jÙ^Òmô›{ÙïÆsß½Úëü:êî­ã',Xœ6qGÔñ›3{Œ|a½@.·¾Ïl]uvø‰áÖ©°³ lrÈÆJH¤¨÷LíÌQJñ$náŞJÄUG¾û7_uœªÅ*¿Õihçd–¿;ç±’n¾«'¿9M‚hX:Ü0ûÎVŒ‹Gë Ã–o}w Œ$¥r—cn•{á¬i0úVL8ôµl;×Jy@!‚j,n¶ú‘r2ÆÅß©ÓxÕ9¢Q3²­§ç­>‹Ëà¶ønƒë|íhùlåhy{J+Á˜¸n«¼‘‹Uø}ÃìD–#‚3®áà›¨á|·ífİåº4DÆ	LºwnE©ÊM³‡.#«ß_?rİÂ­ïÂ•RëO¿‹TÊÆÅíÙ­yLœß™İ‚^³0G~§ß½½ªß¹t'—uŞÑ—k5ŸÒ å·»ÑkÃ­sLrEœnx¯X·1J€1H%‡Lvàçb”mQG~ï
&yR¯çñ,$Åô`ğôˆÿmÁqËÁÃë¾/¡ŸŒ«_a“ôÜ{õİ»—l9ÍK;í&]…^¶T¢ø4§ß<+çœFY›Í*Ò·r/K‹;·Éÿ‚ ”è¿?¿%ifwDŠÙY>ò ÇÓ
r°,lÀãi¿Ík_Ë“1ºİ”¸;¿Åo96§u ?À7ÈÙhC×ˆV#²ïçİ©éHTôU¢¬q˜Ş³Eå'míÿ¶‰TîYÚY>s‚µ²r¾nX6à}#“£qËgşó¥³µ#§yÙ²|¾h]µ‰Û’Şw:GVùpåtılîlÙø}vDÓ&Ûı©Nºkõ›ûI°®5•t%,F	VIàµ½{wJI[Œ×¢Œ¦•t|°ä-~K3ä0ûŒİ‚7ëSvìÚ ½ƒTMIO¾•í©B•$” /iE[[iãA•6ÆÖ·HrZğYÁVáu‹ÏÔ
9ÈR”‰i!~›²cú°Jˆ>ŒmÈ`cwÒí‚7é28sm»HVé"UÖûiâB%ÅÛ|D¥1{­¨s˜|&>È»Ìíd3çÌôŒ¾t'åÑzÍdS±¾UiƒY½U’¡®‹/Q×Ö´§wDA·ƒ/Æ’œ²óò˜JÌ(ëL6È¯Ñi@BøĞ,XJ•ı(GY}‰úQ8æ	í0¶ÔdßS—¾+ìªË\ÂıÄf]ÑûÌ­Ú°á¶Å—“Ó­|¯P/´ìQ‰ÜMj:Oü´¸· ›?÷h ÁVwE›Óä½õ}íÇàI9òüxn‚„ğoEªh&Ä™ºvĞ eË	ğb•âå§TÚ¸µó)éÙ`ƒË=Ò¶9]{ì–~¢®qÄë…‹”y÷oÊVÕîÔÎÍ™}˜}ï‹åãuƒçhuø;íPJIS¹[vìƒÚzy¿Ù‘£5°!y=¯$_UÂ’¶(‡ö3ølŞ½ÚRmO°T/'2ñáÁz ÷ıÆ^Ô,…J‰
ø5,§«Wòİ¿3:wz‡Ñût`'gøMšÙu3£ï‹ŠoõšÊì³Î–ÀCegOË‡`…fñUË2.ğDÊqIñ­®OĞ2¥0›Ôæ·Iñ>HùF˜%Å`VNßì ¾æ†Jcb/†d¢¸«VÖ
T-XÕ1Ú:xé¼FU³.ã°Àğ	’‹r&İ“êåÜ·­“vš½¯½crÁÛĞÖ”¸Á'&´Á˜pTÓ²AE+ÅË0¿Û‘z‚Ó¢„m¼¥ÒÆ-&HÓ ÑŠZğ¸1a'Ö d»d—³}»?_×!ø	«…Vô’¶œnYå\š,ı¤/íÑ1†¶Íkõ(ÒO˜ĞF-×6v¬]ã ĞËx­dQËÓeªaŒ½«am ©´q+~¡+¥}Ğmv'æ¦ÅeëØ{iENw“­\W¹Ye<Æş;®j¸„¨ß*,êŠ±Y5/›É¥	^9¶á0¦²¹•q¥œ¿½Ÿ¨ĞebùU
–õ•X7éRxª<Ú¨bŠÕ£óšı6°]á¹Ö¾İ«õØ}éJºY@ßÉ§bÅjnÜ]’ß«+ÛÆ#³Ë… DK'ËÇmöÖ÷«y ?¹?Œøñ{S;ó[s”¨evŸƒ?úUôÎçl÷¡,ÇK¯kËzäaö¤º¯E†yã±zÌ>½ğ¾İÕc—é'?¥U
éÄí…ıÀŞüf`kùÙí.’O:@
z°æwæÎVìîÃ³¥‹Å“µÃõƒ¯€3fUFçÎHÂİFÇiqšf½ê%½ä OÔÑÖÍÖÂ )"j£3Ì‘Ã»˜ÿî¢ªc£àß†ë‘UÒûÒe‚M”âhâ²¾Lw¿„óZRÑ¬ˆ­½tÖöùlñdñ|ílılı|ítıb¯RÎêRÜÃRÃ“5$Ì9Y9Y´8ásÉì$@ÚÂ®Å•µ87ŠÇ	qÅU”¦’¿(ÉÖ6;m›7Õ3bQTPeäÆî÷ébub‚#KaĞi¹Nº¬DEm#TÁÜ½D9$¨>?‹fÌ^¯•ËÇ]Î_ÀlG–`w[S›³à×L+½ªô~œı’È&›{y—Õem¹p)RÍ:S}«'Õ75C¼b—Æ&H³r\	Qä0ñåªÙ®Ñmôfz™f¦*…ŠDE)ÅNL”îŒ¶)ë¹X7_LÎ¬ÏäÍ¶sÍ¤›âIA‰H¥Tî£2Ö˜q&&!£6@|•B3Äéëq)"¼N
£¥”Q±”¾şCXJŒV ]™nº‚`†Q°Ëâƒ,XÂ9Ó,¸s­Ôİ,%§uı|Éî»ğXWÏVÏ–692°Ø¿õû™Uéç_Æª®÷›\–¦Õ©©&JÚØÃU²N•C˜ÆSŒ’•Wï_xrôÜ	äüªo~8–ÿé1‘–"Å Ÿ55E‹Tîã/Ÿİå¶û’¾Ì Ù/t­d1ÜÈ;1kĞÀH m\z÷jì‹a4®]]ÙtníjzdWS¢Ş\db(­º´’í«_/&¡f°g"0I>^¤$­ë™Õó†Ò
Y?{*ZØ÷øG£…¹ƒémfg÷äÄĞI°ÔÂp^ù¾d¸êìoQƒ%İH{+X\Ëç‹›ó;{C±”*Ïœõ*hA{P!=–‰#ëAG”%ë!-hêZF©úÙQyş?0‚‹ÿƒ|×ØÌöSÎŒÏèmÍ[[YÆWÇdÚxûŠ6ºÄPb½úÄR5¸9~¾33fÿİ«‘p¿İ6ìó+›/ÕùúºãñzGÓ2Å÷2onxö@åÌ øÏH—ğÊşµ
[cŠsOJ¯Ä¹)øñPå$Ï\u¹W—|™«×éÊÓç)øû‘Êù¿Ic:Ù%~ˆÇÏŸhv9¶…ÉÍç;¶Ş“s¹Ÿp?1ûXÔ|~Å|İü
ü¿ÿØ'¼{uŞ/Á„xXs™ëbÕ³Êç¸S}~>}÷jR<'+"-¿ŸSÊº¨K=5xv`ª>ñ„_ºÚÒ£KO]XOÚz¤á>6“]‹#ÌÒËs×ß'Ûâ}}ÉphØ|òàéİÛäñÃg¿®Lê³+®¯¹ãúHsûá?ynS}uéõÏ†iûé·Mn›*Ö’-½û`Ë2¾FŞç÷pıW_ß~öÌÅc‡—:´÷Z]î”½Æwî¡qŒñF<é·RÎå·wk¿‘y#âŠ:ÔåvşÖÄv¦Ô®Ğ¯˜°Êùx)ÁF‹‰ZDŒt2e-wh%ö7ƒĞ ØÆ''øn•`1&…ŠI·ÉA
ñJ3]Ê—Éeó™¸«øÔÿË„68Ò]èdkZ!QÖ²şÒrw£İ|'ãÕƒ%jó•*müŸ£H^5"Xeƒ7Û´âıL?5HöÒşŒ«à¢]#ZT$ÖWM¸!Á™œàMôí›œî˜`µ²àÛv2m‹ò«'X*|¬¤+%ûXÀcì{à±•Ã¬Qa¼‹UÂŒâÛÍ„6²´ã1–*†JZ®’.Ã8—‰Šli¢¢´ñ©IÏFÃEVèšÖ)Ó5°+kÙ–Å£-‡Á	
Ê^ü×NM9
:QÇhÊ„zå-tÀ²érºk`}"“ÿ]7‘GaåÆÊÛKçÏ°t1Ê>sıé×öek4óìÅs×Ÿ:İ8xè¥…í»3®å—ğ"_¿ÙxóÉ·:Y+’U\;zâÅÙ–¡—Ì¼:µùàµ§¯=°»úúÓõEfê^ä½Ï‹¼ôÈ+¼¼°÷ˆln§¼¼<õò|'R;ı¹7ºX}û™O\¿}‘¿Ÿ9|öú3gĞ>TZ=œÚ{Ğƒx¨oÍo=şêã/L¿üĞµÛ,ÿà>/ò:¸NŸxâú3lT
Ãp­>!X[)÷c;ÓûS/Îî=òòÃ›3ş[OnâE¾á~ŸÉo­ƒE3 ƒ°½°óĞşz%íÌ»{åák^{dïq$léO9_Ä‹|ã}^äè™³µo­–"œïá×Şœkš|ööÂæÒ›î?~m~ãğÙâº8ÿö.´üÍ*Fÿ7Şœ¸ÛF>/ÓšÓñap¼C|L"¸«E1±™w`óHˆV2.+o$Ñj¬ks¡adïÇ%B&Š¡JLÍ›ÒŒİ=tq×ö–á5‡”½G.ãòèå×;áÅ?{€&q‚+¡	Œ^w¶}Ù¥–H·’^Îë}
^„¨ NÜ~9õ³JË>b†@t$ix-Áoøº³m|£¾<ÑòÚièÌ·Üç˜_¦H¿+‹©/FŠ:Öè¦ÜyO¾•hŞâÌ¸HÉ.EkÚõ?}€µÃû·çÎVÏ7Nfáµx±q![M^-ƒ¾¦u“÷èÎsuw <\ßzŸ+ãí§_úÆêÙr#ØÈ»éÁWö\Ş8˜G<ï³ÕëO_bâù¶û¼Èµ©—~ûñ×ô¤¼÷c×}ùqPEñÚâÑÔ‹O/-¾µü‰Û„,ß~¿r÷±·WŞ\ºx‹IQ‰Ó¯ÁEƒçÁkí¬œ­<ñöÒ›Ï—WùÙ7ñ"Ÿ¾ß<öÂÓú–f¨ÔÊkÅd+×š}í¹7ß|êMğÖß¸İ“ï¸ïL¿<íi‘b#Ì³7|ùY&ÜIùzåÑİÀ¾øĞÁÜk·{ò÷­¦®=úæ#×ıD9Z[<]?|–1Ê¹îôÖÌO¼ğÈfàà¡ıÇÛ³ÕWğ"Ÿ¹Ï‹œÌ¼ğäÓ;í¬?Û›Ú];}–	µ@M½õÔ'@¿±ôúÃ{®GºÏìáE>{¿dùbıduoºe´0\O¾±XËzmí…İ^{ìå…W¼öèÁm&tŸ¹¾ööÓGë‡Oòártá³Ÿ@]XèN¿ğèîC;S{3;3·éY¾ë~/jêOŞX¬EK:é©·{õ¯\öç¯?ğò³ŸX?{âÅ'ß¾MUöOî×txê,ÅWauU¬“Ó¥ªÎkv=şÚ×¦_~öbélù­eéÉÒƒ‡XV÷}*	¿vÇ¶Â]ƒ½_éø¶}Oß)„™ˆH8	ö#YVº¢÷™<ù¶­m“³-CÛâQxu_?Â_xkÈ?>îêİÂec¿Íg\³K;+'k»«»«F#Ú¥[ß]ñûUEÒ„’{İJÀßĞƒ¾SHã1w¢wüŞ;ÃO,&Ç~ó›ç+‡0™7à~gô,Í">»5øì2&>“ÌŞ´ÓmğÙüÀGúlª´?'[]¦~ªUh¦Û†v®eí¼fNSÎ4“¥ĞUÏæËİ³ù68æUz4Æúü°è»ã¿ş¯oóØãs•(Lã ÇÆ}şbõ”öÙÊÙÊ!üë|é|ù|isîtå|ygvk~÷{á¬©rwc¬³qˆñò¨
VU°öMı|×*’†§Šd1ÚËÉ…^´‘¨¿oæŒ°-L9h’v§VÁö>\»X¶Éˆ¥ŠIñ´c"w3sıˆÊsvõ;ÃŒfZÂäu¥˜Ë˜ŸkçQ¯U¨S÷3ş?ó}ÃñÇy©“˜&`ù&ò´ –aI'¢2c	Ñ¨´-HäoQp7?±ÔKÙF	eX‰q¥ &å%^Å"Õ‹JÉäâYâïˆY©”9–LL%Â¡µ+Ù|6…I½?zi/3Ü™*q'ÁåuĞ’]¶ûÓÍ`1è Xc7]Ôó¸%Æ„=¯ıÀJŒ–c²¡uèøXYk?S‰7hGœÓ9â•¸dÇNåÉ~Óuõ'[±‘N¡^è\Æf¾wD»FFW%]”D4ò^íı<Ù¿ø‹!fâáêâ†ÏHÙnr<0h,cùî˜Ÿ>,YëÃÂQùïÚ¨È×±1_&â|±Fá:?v—„›ño–4­”‘ğ4G[s;Ë'ëûí%­YÀ„BC‰¤¨çÌœô“_ª>ÈqK¾^ëO«ë_úí¨hVx¡ó¶7»9…°ÏHæ…èf‚e"±ëUú9•¨ÒüVĞˆšzœ1ø,¸#W¦½/Ó3;íN»dkÛ»&„ƒúy•éş±@"ÿì=ÂË©XFÇâ&d$‰ÁÁÚ¯ÑÑJQ!ÂÄc³àNcÅTI,ş7*Ïè*8… 
G¬b=_?W<S¸·UÌìÅl_D¥ù‚Ğ·ãÏOÂy¿x×ø|I«IŞË8\Aö‚÷Åãï¸ÈOVN–à¤¹™A áà°mÿ²Ê~à˜–÷iæo¬¿¸p}µëO¿•yÃü†ùE,Ÿÿü„•p9nøâ\pó¥yÇ‚ô8¼Å‡ôï'LXFÏ…ƒll†„ˆl\ÙìIv3^“Çê19í¸-õ+®™ÇÔ‹K¯†¹‡§^	½İîæÿ~ıÕËRè…Ûg·œÇKÿÎ-Ã»mA×óİôÀÖLö ù­²½.…Áb¸BUĞIj’¿ï¹3÷áŠE ÚçÎ37¼FğË§³4«“(é:\µ{N¿?MÂ<Ø°®_,è¦7§vZ8`‘Kèlİ²¼=£õØœš!d·'íÏ*I¿®2âcŒ`§’ÑKuŒ.“ßæÏûÍmK?Ù³w"õBÇŞR@U~C¥1€b=VUÒpF¼ŸkÛz™–Åcmfú&¹Ğˆ0º!¸Ë&´Q‹ñDáaèª<«ËïLÓâ±·mŞB[¹ßTicŒ0ÆÅJp~[Ïâ2tí.²‘G¡Ù6{^C+8D¢ÿ•6¾r”„ÂËğÜÄ„H•5JZœq`ég›Ù8H¶m’"j~wB_Xº½wZ­¨¯„ø?gBœÙ™j¥›¡šRhøû6œ¶^¾–âÅp;Ì&æƒ%GJd5XLõ3¸s÷*¢äQííß^ıSB9ËbY°¤9JØœëw¬ ÄÁ0ó'ô©L€}E²¤›¬Æ$Š16\ŒÔÂbŒÓÕcÃmê?šĞOÕQ_
•	YS‰€…¦)Å8s/SI¥X]¹?ğŒy½/ç´øsnƒ¬©ÁÈpfÌ¸A¼NŠ1#e®ıßÚ`¢b¬”İ…–¹]ÀvÜ¤•ì¢#†ÜM¢ÒÆh“£Ë±z¨B`qÇË±Ño“ˆZL$áš¦¤Ì“¿œ íX²HÕ©"á´yu° +A.Qƒşõs½B'ïN¢Jºy/*é?ŒTÒÈö,íqôñ>µïM`Ÿ¥³|f°÷˜°d““¥xEWÒ×5‚eX† Sicj”2ÏÄzæ~Îiô[Ùj˜‹â¼VÒ”Ó¾lUçI¶ŸÆë½wu_±q„ûÿ§›71ymX?³µ sĞôjV?³+h=.Êuî·:O66Î•´?ğx\§Ë/²§œ¬™=,_Z øƒi=K§JJ
wßÜæ<²m k!bc}4L~»3›¨ùïMÖ|ëo/8¦ù”gã-[Î¹*/µ–ZÔZÆ	ç*ZKÌñ¼ÿùÕ¹ëÉÃä¡²kšğtX²”rÛ”"ÍhÏ [\ÙA¶ñZúöÅòpŒyÂÕ‘É-øÊÌ‹#ëì8}¬¨X'\»–"»ÛæKº½tYÏ„+™N¡Á+[û{W˜ã’ùqäalLêFoöùc²q•úüÉß¼y³¨ÑŒ+ŸĞşP[Qxì­Uœğ°Ãíí0›”¥1÷C?
v|â¶=áÎÃ4~G…ãáÀ¨LI¬ñßÏ·ıõÍ›Çš!æ	?r¥‘øo]ŞK´óH²0¦=!0!ÈêÅƒÖZ¶Ø›‚ÓÌÈÒSwÀ1Ë@iú-¸úƒ*ÃüG/Ü=Àóg~ó&âÜ(HY( ğ®Ğ¶Æ»EÇï
G´?ÑÉ‘ÀzĞÆÅ
66hW*˜8W]áÿäæM\>ƒ 98À’İ8\9Y<†Şœ®›ıHSŒö2‚Î"'ÍR¼Õ3Xzº‹'ã*“q,Ök+ß1õ­ƒ”ÓäJv\>VKğáº–·xM^%“îI•6–Fô—U‚£ÊXÙAD¯z´+h=\£ı¶¦Ñ«˜!OM¸§M²ËfF¶ºL¬¢¯Çºvwª÷"‚áÉ!™İÓ*ó*éº=nÙÊÍ›HfÇÁ˜Ãhì.œƒgq²~´ºØìÏ-lØ\GH¯‹H9‹Xm¾ˆÄQKùbi3`”×OV•zg'Üµƒ*ƒó.êX¬Ë–Ã¬†KQğ?Éª·¸ÅúÜ„6x+ê»Sø™©&œÕõĞ²€Ê6´¬ıÔß†cW™§/Şïo^FŸVH~?ˆ>ıàåÁ8CK¸ü£QsGÜ {ñÂ{WgÓiD`ƒ¼ğ¤„\ä›Æ˜Ÿıl/?0ûí¢İgG/îE•^w„S_÷Nƒøá ˜ME¢˜€ÈôÚ|zQËiE- ÿ­‡ZHE@
4æıTt<
>^Í¶“½´'çTæâK*}ÙziØ†œtúùz¨AºÚr¦œè\)gªDJQFÇ[?Ç¼úŞÕ¸ÿ)” úY”‘`VLÑ$“9‘¦âÖw¥^i‚ršZVgªk”ı4YÔ9¢`Òœ™µÌ.JTÙõ	3·‚õ+¯M¶€Q5Õ¬li†š¹jT"C_ë×UÚÈŒ²p«áFA.øì˜ŸÕ E-«)…;v_ÆãİI¹ÈŸ†c>1aöß¹±p_³ÿªƒû‰ŒºìÎÂÁUdJ3¶°çv…­E£l[>–MK›S¾æ­ï8oªL»§^Mõp=Q34OBŒQ&†j±j„;™h¨Zß`íá=~:¯Ñ juâÁÁcj—¢[³›³…ˆ<"•#“²Í ¿£gÁşB`Ü7{OÖ.–Şó•£d]³¸›Í"#OôöìŞÌæÂÁÌñ¢TŸÁgAvæìÒ?ü³›7~…÷š¡’¥Ä½™]°‘‰Ùì·¸@¹ÑÓ™lÎ!6ˆwfgù”È±Æ#GËÅÒáÆ†ÏÁÈ±à—(%b*SpŒÓí0·B‚¶L”ãU°°K±
Y×—)>èñ‰ŠS<OA¥ÿˆ—¢eğV=iŸÙOWˆj´>(—`)ö]J€¨ÒÆ-o‘æL^­×:°¸Óå0(RÊ¡/E½@Ø!ëJÊ¤4aI²AVÇ‡K$iGPÇ<xğÕX7ïÉÃbJ5mˆ=/¿wu\ùË~¿èº[ÇaâÂEmY_ÖzŒdÇ(›ñb²j¥;ÙÍ]¸*8ÜùoŞÄ%Š±n°Óz¡·“- O}Íà9\¿XÚœ§D%Ü=aÌ”jİf—ÑeëÆJúr¢oÚÜvO¾	ò€yTf"ªñ×ş§QxÀÀ¿ÙŸÒ:`Íˆz‘yÌ»½©½¹-0“	ğäHğmĞGBğ‹Õ³5„œÓI=?“Ú$‘’÷@ñÌîÍ_¬n-Ÿ,n"àËüöôÁìÖÌÉºİG‹›­™íi0JÖ¡¥a‘ĞÆù¾Wvæõ9
f/|òpı…m%½´;»kEÏîÀ^Ø_8˜İ%XP¾¬–ÇHÈ™9«2ylNxy-?=ó©Ñ+d{·÷²Fy½ú€Ês¼Ò«ÇÑÌÇ ï]Xû.óÆâ|›› 6™X*G:á¶±gğš{F¿ÁM–"eM‰jêÑ
Òlş^îóçF;ìc¨İ1÷¹*£ŞİÂ¤»µ‚\bçèZ|èg;)ÆØ`#ZŠ#u½YšàÕbr~ÄSğ­¾9uc¶*…_¼D½DİÀS×îáÔè‹:òéã«Î5ï³Şg%¼ó ŠîÃı1lµŠ±2]%äœO_Õ‹	‘öÑBŠ•RıB½ğ«pLHe\Yêv–Ã§¯Ô“¢	›lt,Ù‡l¢+Ç Q¶4–0‹Û³à .ìÎ€{ºîtÅä<_:Y;Dx§Â
óæ–£°¿İƒì²ø2{lnĞ/«{ ëÎ•Õå‡Åƒğ/›ƒÙÓ3%†rºr¶-"FGÀ8cŒ~³óttéúù*¶°=­C3·¹Â*=»\®L÷º{øi8.¥b ~“íşÔ!¸ğìÁJ#pxïf :öÁá:F¶İ…­™ctÂ1Zç½õ=Ç¤Uú¼$•£å¤ğ­°¨5Ğ’ÑH6Y#‘<%XİÈ‹y?>oÍ0Öœ°NJzĞÒ6d¤/í¶ÊÙÕoíÛÁ}±º
ƒlÛŒ[|…/1yyO[|ãÜ…Áö£ôÿÇ~`pÃ(¸ÿÆ~T¾”úñË÷Ö1”1¾á¹àÜ¬NŠ“L´˜«ÊŞ†yİÌÖâåLÛîÌµR¥TÛ<„k©MhCĞ²6\ÉtP#.h‘ÕeíÆº0;XãÀˆyg/±ñ¼'Vß‹‹EŸósNQß¶ïÑ.Pô-†1Ûu¨oAÿ‚ı´‹AĞÙQÈwĞM­5f’{+ZÓ í¥<Æfˆ‰0ú]ÍöìıT_a´ÙRicÌ¢ÍSĞ(ôRİgò¤Æcôç[ÁêË™†¶'ÜnÑws-ËÀìL	^6ƒ¡•í˜œ™¥Ÿ`ÏaOeÎŒ÷4kzÚo•mÍÒD8íN°Ÿ$ğÇ­äÉ¡s0¡A/‘]H¡–©krúf¡euZI°ÌÃ•¶q4¡¼	W²î¥ËQÜQ€5`(Q_ƒG£Ê÷ãIÁDKËä´´-rº+‘‚Õ“–Í.RÒÀèPB%¤ó\eÖ\f}ÏÖÈ!H'ÅÂşô&òv.ì¶§÷æw§ÀvŸİ›:\?Ş8ÜØŸ/fn{nkAaL[¶É§+&ĞGÛÓzî`úhíxédC,¹˜Ğ‡Ù•˜zF+F+!ÈJ°eèšº¹µió*Ïá•6>E3r®õ%=fG¨–(‡kÚRª“lšZÈ^jpQ§ıIcîrhI½
ïÙ7—_š);ò^ãÅWgÎ*NİÈ½e;3´ŸÜ|äì™şã×?º™Àÿ¯™ĞËÖÙzælælFšeg^
bøık/Ë nŸ5öDÕr.{¢XªÛÊ·Rnƒ+ã´‹$Kc¥DÖB+ãÌ9J‰'GÇ_¶S0ÄîMï¯›×V÷¶xíÜöXf~;‹Mš÷[C—ÓŸĞ
s¹ÌÎ“µSD6/ò--,É»Hûáş b±ÊÊ²;3Ş|#\I7-07EÒâL-„0´Íƒl7†aÓ¿ÿŞÕÂÅ×ß/©¿˜à$Ø—0aÕI1)"RH1U×ˆ"ÅÇ9Êm‘‰jT$]f¿âÏƒÊx£2Éz¢oè<é–©cmÀ“0øa-s¤~s!ôÑ¿QEsávşvU¹ˆ,…AÎÚ:6iMn“ÃìKãƒlÇz¹ÿä¥6‘0„5úlÃÒ¡³ÿN7,ë–EËšEĞpÛÓ–tÙWOfvfhß‰ëbÍ°º'|˜ß›Ù›%°ù=æõÙì9_2/mÍîHôÜ¯›?ËıdñdépõH„<Æ‘ù¦	#S¥k‘F¢’)SøŞø)ÉÕ“˜šW¦§e~³J~ıÈî³­ƒŞ’ƒ8Â8sƒŒÓ"Xš)U"dÀ·¨Ì¶1è©Z>úåÑFˆ²Z˜	I‡–M°$È1ƒ,ÅjÚb”%äÀş•#’‰5¢¢Ë-ÁçŠ‰R¨irhÑ’®¾—Ùùm*}ÿê‘Lƒ =²¹oí¦Ü…:é0÷Ò]k+İÍöíÜôëÓ*3|œ¿PÍ¶óƒd+åÊrş¼__	óV‚ı¦Ë‰b¼¢°àıÃI[FºR¼oiY}énÊohšÁRL¤á©†ÚR¨Jü(ó*3|ƒ7^ñÏ]FÃÃO}çøŠv7+2–e¤uæı¹VÒeïÚİI¯äXæ*I·v<´q%BÚšßœßšß™Æ¼—an,&T¬)éz+Å;Ë¡mÖè¿}îÿ©+îóæ‡÷Èl})9$¹’İGSºÀæÔOÌF
Zt^3½¹h[{åhz—!g·–ìK›ûÖõ£•s—iñT&Ø]–wç7Ôøü~$¥Úd1z²#î‰Ôü~`ş~0¯·ùı,¼Í%“ÿtÕè"gO½Gà£çN.Pn“×ÊÓ~£Ó¸bX³¬·x+¿	×»˜ß›¢¦¶¤ØâL²İgtbt™ÙãHF/ìÎlH—Ås¶²Ø]=]¶»Nfà/¢–ßÃã›M€pMoqÄ,ÉéfÏ<Çş3·Ù@À4GÍëı´¸¹t´
ãç1¸kf¿‰Ûí²B»à$f÷ôV/Ràİ:‰…Æ°t´tê<ö@Šøôó:ÖèG9®ÌìÍQ:BÔè2øéÀˆÛÒ»{âÁÂîš…?pÀh‹¤Ûî<™ÑÌíNíLïÂèl9`lO–/V/¼'§.‹Ë¸f”—Î—W/Ö-ğy„Ñ‘ÅÍÀ‰óÜp¸¶µ„%_´lìtİ”ßšÚà:«{ÓZVç½ğšVûüÁ:ôËsf4ãºI¶.­€E±b[»X?	è»Íùóu%ÕÓ3IÖÌn/lÎì®Ú] —ì>ÅŞyOeMÁëdƒ.§{0§vÙè5º¬^»ho¼Ùfªcbuú]*Qï'î¨N¹3êış5ÆGŸú;×Ø‡­°-iªÑRŒ§„ˆ¬F:F·Ñ,—”×&çÜæ98æ»ß»Dã!è7ˆT½}æÙ’Î/9İÕ%½ıÇ«ì=ñZUwğs
ú§wiD¹…Ä{1â	÷|üÔ+‹|ìµ™æüı{ß»íá!ò6j>œ[ækÙÂŸl?wòØ¶ùè™[æ6÷Ï&67õè=6‡SãŸO0§ë…^vì›:i{öNÌ]=V¤À-¶
¿ñ{à˜ïS·c®6µ,/û­›71QˆGä½™­ù½i’GT/Ü³É,B2{taADZ\˜Zu†DË+à2L_‰äöæjêuxñô­ø_¨¨ºÅq‚ÎœÕiêØ]Üä¹‹‹	q›C”é¼Ï>nŞôİkŸ›Üî4{ìnÌQÙÁ ë<n'^‰Í7©çÖıW*‹øúAM5N™q/şÙ¾yóÚ=õâCß)Á`êÚ©8Dˆ…c;L¸Î:§©­çZú¨;wÃ¸üŠ±†~Î|LåLül9Í[S•Ç¯×p2ük•É0»‹,Q®d7ï.t3®TÇÀDÚéfÁM‚§a3Xÿô£*¾0¶1²ïÿİ›7÷qÈÆ5MXç4Š¢£:&‘æo¥Ë3h-£­0ª½qÀ¹•ZœK5SJİÓˆˆ60Š[‚Uq¼ŠT`ÂX{ú¹I=Õ±&k”©†–ÕˆºJŒ!E=Ø>)o¶ep)Ñ˜›Ğ+SœÒúz¼Šûy”Ëèµ´ò°CºI|@?~/hş%Méa…Qè§T$Ô§…„2I²ù2-ƒñml][ÛîËÈ–v¡ÁKşô½\r¶A´èôNeq¿ù¬º‡T	·A5sms?íÑ
´¤‡±×uÅh,çæ˜Ãño´ßæOûÍM£;ÕÍº,UËzu0nq^Ù5ÿy•Ñ~Ù0T
İ$OŒ‰6âH%ÏĞĞIÊ†©›÷˜ãpÌ/¾w5°ük—’	åïÜ¼‰ñ
ìÔ…x¢ÑO)…&§+ vW¬.´P·g÷§áÈ_zïƒÅÊ8*_ó é’Rì›ÔÁ£EcÈ±yy¹ª)=Š]û·*]{áÑpªH8ÌÅ•tEÏÇ«4C8­Í¬+[%‡™aÿNefÜâ«	•y<ãµµ“r¡A0Dƒ®DÙ`#R&8ª¤¤~ÿò„6jñAºŸujd«7ÙÏ·s5m#Z‹Õ#B¢”ê˜:6Nü÷ĞÆW´ñÜ´z~ÒÒkÓo¥ıÑİ×_½²úÒšï¹‹÷bôµóLÿ©Ë'à~nl9²£Ûz¤®¯>pôØaœ[yëÎièØ€æ·¤ı¹Ó•“¥MLqÛ]3§wâûÊ–Ç?~sXô‡9?ˆpÊëy0ÚydDÑrH{oqÙ]G§X°ê?ÚÀÍ=4[õ!Y¿Tæï¬ˆ*QÕ5‚•42]–F=Úã[;¸¦}y÷×&X"åx-"FKÉNNNv¬¦®©ëÑª®*êD}]I?øuçûµ(Djú<ë^º“l|†~²•÷X›Ö~ŞkòY›æ«Fğõ¿ n´Üb‹WÄg÷]Š+âØŸÛŞÚ7P'’,2Z Ëş²Ø
è9ÂA”=Ñ§”D8t¢ÍeëBk¿¡¢^şêúíß‚?E*<£âöìÁ4¼g´,¼z>§væ5Â uì¶æ.ˆÕ£Õóe»Ûæ:Z>Z>\¶Ëˆ£ª¸
¿9AÀ3 ^|æ½›iÛÚÙ–Å•*†ÅˆDú’^'Ûø-•6ìcŞî˜¤ğ>õI/ÙL÷“rÒ“*ÅùD-[Õ—»ô?«´ñ••¨'Âiïf9ÓÏú
¾ŒË .‹V
w
^ûÿÇü¶Êl—ŸßK(f¿µæ-BÂarhÁúK2å¨ÃÕxßÚ¿/Æ]ÏÏ
_%n¤ —‡·QMƒšwš± @¤Ñ@` ÿ(Ûy3Ç±Ì7[°Úï@áµ8PòºÇÔ42.ş—	½¾,æZÖo`#­ ­ÜÆvºŸñÚ}¹f®“ñšš¦ÁÄbu5«ï£Âbşé>âuæ€¦Geä>Ó'È¸ŒÓŞ‰Ô¨UÎxSÎ|VŒ'ç·uS]»ç‹:roÚ)æn+&¦’ñæ#*ğ3,–`c®?nÖ)lÍ#öXÜ2Ü—c+‰3÷ò\ğûïªŒØç>K·läd³låƒÈ4PÉtS®d1^Öğ‰İĞUïk…ı w”ÆduYGë'3{3Çëf?-Ğ†äö'k·İ£•ìƒïtùdñ|ùtéx´JŸ?PÑEÁq˜=^Ó¤Ã%=ââ`|éª¹áÌ7Íğƒ”â6•6ŞY8<ÁÅ±R»A—õş”×èN—#íT+‹ÿÆñ&X'•p1R×9ı×ÄQu-GK‘Zæ`ÎoD:,Zúcíñ<yû·BzÄGƒ^œSB\‹§+§‹X˜¤eôœÙ§ghVU,¦ñ˜<fÿñÚÑúÑÚ^@Ï¾ô¿ªHî×FÒäµ¹læ¦EÎv‹­'8ºôU#ãåŸ«Ì«Ã•^
•H·	’äL3X¡+Xşf#`9„ªÙªîã–aóo¸¦6²åØÑ†Ùºx¼jôü§Íuº¼½°;}¸v†còß>‚1)ÇêÁrº­fû†V²nÄÊG¼¬„…NªH~Ücò…o‰dscïÏ‘½qñdÍæ´»-Èæ>Z3ú^£Ç.›1¥í/TÆdşChxV#Û½ŸÁ›§)Û³·³È=ÈÕåÌÀØÍªõã,9»=¿;¿5»³|¶aqÛ]VbA¶¿/]uöÄûãÚg@½ÏÃËM‰ÛóßUVí+öÛ¿ıpZ£ékĞ^Ö~M @¢ Ìó[#ª4¾Ñ®Àß°GÔ <1Ï”/¬VC	–ho`ºˆ’VôãpÅÿ¡2îïLØäW tWhZ¶—•™i\påá†šf—ÅŸëÚf]Şí¡8ô¾C×á4ÉëôÌ¿=»Çí;ô³·¾‹.§›T×½,'ÙØFñ•HæõÚO—CÅ—(R’!„øÇ½œ2¿¨.'…òqFËQìA`?»3¿=·7¿7M‰ø»÷.‰ÏşÍA×Á(Oõl2eİ¬3&lŒŸ.&;`Rºsİ+áñƒ?¾¦¨k'à <ç«‡«V™Ã_w¦·çá•lMèÍ¸¸³»S»SJÖ1õY•úza¤jµõw„ê…v²—tQb¢¢¯D‹$£í^óø…Vicå!ÅËúJXSÔ–¡›îÅê1>(èkšŠÎav*•†ÏŞ­éX…¶Í‹k´c@AÂ·úìrÎi“•Ü4ã„6Ä¨n§ËAQ[O€ùJ5ò J)wº—•í>³SƒôUæÏşMé«`ìO—NÁ`rè9½ƒw¶jgíyRÚìâİÚTîvL0ÁƒÛ$ƒèîæÙÖ5É•s[[fgÚc–a±û„6*Qè3â=A¼µm½(Æ;V¿Ñ¯ìÜ?0¡*Áè¼`"R¨©…Zyg¤K¾Gt”ôà„6j´/Ù49³=KÏÀêëZ	L£bÒkõäœ&aX¦ùJãŠt9ë·´2¼Óæ7:rÎŸóhÁ\;â¼¶œ–Z§GTÚÒ	+Å8G4ò~è‡7ß(
«ß w’jç¾yRe%ßè¿ÛJ®ç©~¾cs%›É&¨CÂ ŞH>³/Á])qŞÑ\Ú_ f´ó;¢’Óó”ÊJ»EE7â¼†Ó–´bŒ‰–Â¥d¤¾Ïä-Ôƒ|XŠ¼'>§Ò¿#½y¢¢«DÚ‘b¨FKz)T¦¸X#ïIËY¯	ÉÃ>néı|V‘Š")hFV¢F²»I s‘ç„q¢DZ —Ã*\˜‹¥­™ƒ™m4ò¼Ê³ îeŒDºªs@_…(£BRŸ ÈÎDßâÕÖrMËÇ=FÎ'e‡K¼RóHƒ±ï­£e)Ğ[sŠl~QeUé¥h	gŞ¡al¬–kÙ]ÆAÒ—.cEš^ŒâFçµÏ^½}ößŞ¾·í³;-N»p¾øöõıi·¹°+X]'‹·¾Ï^yöwÊ#<Áİ 8Hn¾=K
zV-P$\-ş’Êø0&TÑs&Ÿ­WhMæÌV‰J¸ÂAÕãLìãkOCb]¬ê ûƒ #£Ğº£¤xù#•L'Ò7òŞl5ˆ®0¯å•DƒöYüV¾—ú¸ÇÀõ3Ô0Üsb_úkpö¦v§÷qo†¶æ´æ"iY‚ß‚²?MJ;_€ó^0Oî…Tš¥ı6Ù.Ñ‚¦ª©„ê`ßÔõ¥D=ïÏ¹- •’÷;FjÅà_I*}çxáÚ¿>Á¦b´5°™P-*EËáN¤cëd¿½tÔ™¾’wüúû1ò`óÚ]r²”*†¥x5TV1ˆC|B¥1ù$Øb¦~ÚoFZ	ŸŞguZ|Ù$§İ¹N¤b”ú‡7'´!Q\¼’©¤»)Ä~õZyÓ-‹›ªiJšZ¨Aãvè[Ÿ½z;”¥n*Û¡+¯¬/m!hæÛ*ÓcşC¸¥ du >bE¢)ÓU×°†V¨­ÑM%ş%§+Ù`+ï6É¶^¦j¥à_g
¦”†Õ£Ï¡2·öîÂ¬V¢Ü…~Êcig]àÕ÷-M›dó˜\©¶qXÀ©L‹ndëIWç‘×€éIT‚õB/íÌ:	IW§\Ê#áUÚ@oXy$Z0 	LCwYk3é3ùá_ÎL×Ô2ÉIW
÷Ü•GÒ=…•wúÍ\+F»ôYõJB<7š×œQaáúúkkäğuïÕ©2f?;*Ä–ì ØÕl+ÛC¨*’õ«+¥ZÖ¾¹m‘UêQéïŸ—‚¾JƒáŸàµäå·ó 8Œp;Rõ:Üw™`äÖ‡†SJoÚp~£à2vSÅ„¬€R…û×pÌìåyùÂí6N¸{â^Ù¹¦	ó€ÛçöæwçöÖŒ«&Ùì29n}÷œ_uö¯ü¦NƒzÅoÍSÒŞÌ±R‚¿=»µp¾ˆœ‘/îËiDdîºç¿OƒÆmÍ•¼âô®¨<É¯Íº:8_UM	\‹z¸¬mP.K/ÛÌø’EZÒ–#UÅõZUy
ÏÜr5œ61,FëÁrÆiêZA6,‘B¢–íÚ=É!@ŞºJãİ¾ÃnR¶z3°ö)*Á}Õ`;3.ë*+(¬Ò—_è„;—¹§K)VJÃœÉcdBEô-èPĞ6"Æ£¯$ÄHÛ k?9Hô“‹tP¢#‘JœS
c“œï`9İµzón£luQ˜D°$¬&ª±²¾¬‘•ñÈL˜Ùe-Ìª8o4KTCB°idŒŞlÏŞÊ:1©¸€Y•¾¼>*{¨„¡/D5ÈSL¤,"»yº¬¯[i7%$Šñ?Çë\Z—XÇ	›c¥~gëş5ºÇçP£(ƒ?®ª2ø¶gÆâ­kíÆê‘vºo÷{i7éˆT4õ„@uUºúv8¦ñÙ«³¾áÚğ·qöÏe¼EcnxVß\ÿtÇş'ŒÃÓş;¼1ãËÓ¸“‹Q×í™m,§GÃf#¸ˆ¦tøÉoNmâNİì(‹]ì«t‘u±–˜›ù®•ÿÿØ{0I¶ì,0]DúÌöÕÕeÚWwuwUE¤‰HŸå½Iï½÷YŞ› iVË‚Ü
ø–Y>X½y#3È ÁJË4Bˆa$d	¡bÑ
Iˆ•{{NTfW½êŠÎ~¥Ñ²êü¢³23âŞˆ{Ï=æŞsÿ_¬#OUË€&N‰h!-(²^#4¸Î#_í©´¯®*ÉMrZhŠÔ5–D%nV4¢%¥#Ú°¾Sh‰Ó%`¿eõ°3ÜŒ™“¥„MåLØ4NÒI:´Võ²ëáÂÃ/ƒgQpS ÑÙ€Ş_ğgÀñ„1Ú3-uÈ«IKÈq)ƒâ÷|‹`> `5‡[‹3ÜT©s¸Ú3ßØ'ˆ”†˜¶
‹ÂçáÆIÌ À¿ÃÕ{¥UiÂsÄ&ƒwœyŸEü[œ1o]ÛáÀ„=ìWtJ‘[†›ùÇşGÜ8¬ïêZlÍØã=!J›	ËÂYy¬ÊÁòğæp6“ü¬1Óà°.>øŒ­-›:¬åoá÷¶ñÃ³ƒ{šA¹ƒwîhµÇLkuA×^Gì¶1< pëç–	Ê¶¾Â2Û¡0bûa»á}r+¤ë …²‰”#f%ÌFJ[²îgÈT ¡rDJ	SäãpáWñÖ‹Ü¼ç%Æœ«!ÌO–’¤ˆ¢»è«Åª±z²(¡ƒ:RÿFjzŞO{ÓÒ‚«¬l¨0º	ÖÏoªì ì
Ò,ïD&Èµ¹{š‹zï.×}ªÀ˜UŒıÀ¶@11Û±z“<Ïáã¡œXÛˆ|(—²Ş^ñÏv\ñoo F9Á>l­şO¶Vÿ±LnuÎÃMãæóçã÷¸ZÔÂt^le ^ß(ÊµÁ­ú~6˜é?mCX:ƒ?S¾z¤™¨ûŠ¤Ñ•°¢,xõ§[»¿¡Cˆ•#ŠAˆÂe¥>HKÓRÔ(>V¨2Ş\ 733”A´Ê¸v®º%¨I¼ÖˆÁ»aèo>_z,öÑ¡İ‘å3Å—	úzÄyßoëz‘<y¶<2–˜{6šÒG¸­wîÎ¬±«m!kîkêªÚrÄÊ¸_ig\)n=ÿ¯uZdğéHƒSœ‡°­Ïr¾,‘¿™ö×M.÷¯ó´ô[-MË*qG¼‰ Æ«HOØdHEc˜¤%ÚäåovzEuğ¿)„ñ\<Q@Ñ†HH'9«ıÛÊHKòî®ğDEå=à­@TMÜÅ¤UTàâoïPRmXUèR8£Ù`î ã+ÁxĞ¢J,ã“îÃÃHJs¨&«†ê!«Ö¡qªì³Ü¬,kËªÓm•ïw(Ãà§ÄiMaÑ0B£0å.Hô
ˆU€ŞSU9éıT‡2tJ»ÒA:@_üÖ\ƒ8Ğ¡¨zóÒ‚Ô@n2ÿed£få¥HV—×(4¸SnTG¤¥¬À¤°rÓëßÍ#¯¹¶½àÃjë1§Ü*/!³§Ru3	2'.\Ÿîáe¼w—Ü”¬¡°G«2»–ñƒÄBT]Ù¸µïåy–vH–tÈœ2»ŒBüR_†tjÀ^k­k¢ÁçXÆ÷óÜG{£¶!Pp¥ƒWÑÏ0F^™ÁR–TÎX%Öà–u~€§}+—‡	æ |¥Bc›¢ƒ”l¨‹¶ÊYª¿ÏSÆìÍVßò°~C Æj0ãAà9Jn7#h=T#üñXª‡¶T÷gŸ1?ÏAá¼dNgÌÈj­¶kñª¢ì2#Ì{XIñ–Ÿ/f²¦~ûŒÚ…›i@ï -ZŸÍ‹¬™-æ´ğa9K	nU@k¤8„«?ÃóÌªûv¥?ê]®şñY¾-jyˆ•IŠĞ#kÅñÜá¼òá»á™¬?ºà[vÚëÒé^>÷ÏÏÈˆ°
Ùµ%œõnå×qyv`5ÇÑkB«‰^zÿx´¬;¾#¢-Òá =Š¥³Ö¿Ç2[Ş¼ù¡˜¯”+ø7zmˆ$ÌÅ ?Æ3öäC­±çÊ»JÊF¬mÄëªJ4ã*á•Sš…›ı8œóã<}÷Ë=–×v„ß½=§ƒÌ¸$í…X‹Lùò^Ê«yŒÀHäü¬Dçş(3Äøšyœìº%8›íÅóXé©c„O?qş!œ•ùàÇß”Ğ»
Á>~6l°,VÄjÀà,í-í-Í!Â‡Ç²|´°»,sªO7tMpÔï‹'³‡ó'sjçşoÁ•Ÿåiö.¬ÜÇAt>bØÜ_ë9î+“›Wy†ÿş™ §ˆbU›„†íåı¥ƒ…ıyb™OìŒnVg„,®~×Ÿ ÌÑÀKáÉÑ‚Ì,wª-'ÓÇ+j«j^c:XQT]k@EŒmÒäbNí-€bµr¤w?ıí—“ŞıÖõ·“ŞôœLŸ,<_LÒŞâüñÒà=pd•™í•¡eğ‚§wVv»sóºñ—XÉ?¹b%Ã‡Ë/n¼œËÅJ®4¸¿ƒ‹éÄÓ=®oMoM®ß€Am½]ïÛÄJş)O%ÿS§JzO¯/öë•¨éöÃ»Ï»¡Åbæ[OG7FwözNúÎˆ?wÅJ^İ~Òû²÷i—%YğfVúO¦«ŠF¬2³9qĞ7rï¤û°ûá½ğç¯XÉàİáşçKÏ¯Ù•%oÜ±Š,‰ÆÄÎøÆõÁ¾§wv&öÏè…öŠ•<¾10º3¹¾PY4–®ÇÓk-(‘—÷_İ~íÙşç½évf+ù9J:Q*"¥âäÑ<nR)@Lµ}ÓæÜycõÖĞìîÂ‹•¡îçgÒõóW¬dolûÆã©Í)ĞÃ	ëG·Ön:À¤ú^õô¿èZÙ];#Jş…+VrÒ3Øóhrm¦¢¬kë£›‹ƒ½4˜ûµGÏú_Ü;è;\<>£ƒıÅ+V2²ôröèîÑbš°‡m×ŸŒ7ƒE¡¡ûÁã+/V^õ,Qı…;'XÉ/]±’Ã¾Áş£ù‘ù¢È¢…¿±:Š9@Åù½{/W–¯=ŸÛ³İ¨ÜÛÀJşÅ+yÕÿ²ÿÙ­§3ˆyàIzV2àWºGîlŞ¸9póé'·Ê3Î•¬äWm®¾İù™Õ™Š¬’éšßí6øk‰âüQ÷Ë»Æßš{q£9f{€•üòU;~öåİ£©‡w¬àƒt=™*¹o~vpåeÏI¸mçy€åª}2w|ïpt—;ëÎ.ï¯ª¬È-]®?Û¹ùğúÆÌ“;Õ)ûÒôI¾ÈãCkkz—õ¤üy1#d¤:±EîˆfIJT¥ƒc6µYƒ7ú«W¼ÑáûÃ]ÛË Z…´¼2³1¿êÖª^½ıêşÑıÃ¹súo®VÉÜ1…­®©’¦¤hoÏlŞ6	q~}r ëÉk·Ÿœè_»b%»K#}'İ#K)OŞm¼ûªçZ§xuzëÚöígw†g×ºÖÏlÒÿyÅJ§ëéXƒäÉÕ©ålÄ¡µŞÙ}z}àÆ£É‡wQŞÿú+9Y>^|~ïU/®òB%ÓÈïlêî?_™ÛïYÚŸ}q¦dÿí+Yİ]Ù¿{¸”òÕc 58Ş´›êé~	ÉÚÔÎgS¦;ş¬ä7®(]³Ç½/n>¼fW7C¥©µ®íÎx#h¼;Òõpbm<…kÏÎ:şß]U5Ít,¾è6s~¦gdyç¶IÈ 5ûFúï®ìœuüÿuUÕÔı`l}zu6/ÈùÙÃ»o™…FX×¹“ŞãŞ¨hät@c%¿yÅJ_|{ûöãñfÄ&›t}49ëÍ.Ïããêí¡ÛOÏLøÿ}ÅJ@•Ş|Ñ=¸”
d¤›Ï&wn:’åhfåpşàîÈıı¹Ë‡§¬ÈXÉo]±’¡…¡Şİî¡Û¦°MJ¶km´®­iJS;·nmïŒ®İ~p¦dÿÃ+9¾÷²÷ÉÔ³©’ÚwŞ˜Ø éjFË“Oo>›Ş}tíÉøƒ3:ìß¾b%»¶n=Ú˜*Ék
0|×ÁµÉl×‚ŞzzûÁØÖ­IsWóş6Vò;W5Ëûàv<‡¯W‚«‹<è2Z”]ê?‚±şpÔÊ™uıİ+VòböÕ­ík {H×ø<“\Å‡]AAnLìÜyz:Ñ&ıOœÜ+c´ŒĞàÏøêZS¸¬,k-	»B'-¸Ë1»²©>MúşO<e¨Z”‡"².@ï6¨K±¼‡§}5mİŸÓƒªÉÍ/ıg2Ú»áÓî¬È4öXĞX¡Q”òèƒzE)V×8#õèBÜöû<c›>º8>h—÷&7
"JæĞ8–°]m×ÖµvuUkæ`M¼{_ğÚNĞçCÌöµÔÖéœÏïµ&˜Íñ?;ş|˜@şà
r«füi?Ò/§=/Kè\W1a—ÕF•5YâİtU¹½»w&·Ã)!v|å4tÅ„½•“{»ó+ÜöÔûüzkµhij}fíæÀ­W¯œù|ÅJ/ô=ï=ê×ûAt¤öÑMW˜nƒù»şpr{úéèæÙ„ËW¬ä°o·g¸ûp9K0„_›à~Ø%ß—pápé¨wo‘¾_ìâfÚï]qêhywtçÎæ«(+¢ú–R¢a»¾~íéõÇ=/o¬u=8‹»EW¬d¸k ÿåı‘^šd½Õéõñg NH÷¾ßgèş«¾Ãå¡¾Ô23=‚•H®XÉóşáîƒ…Ã>0z1¯=˜*¹õÁ&NQÌî­l/#”èëæ"®XÉA÷àâşÄƒÛ¦X#	•,ì-¦Ã6™éöÚ­'ÓO'ŞYxqH¯XÉË¾7×Æ·'Ë‘*Î…tmÍT”˜ãæ‹İÅÍ‰‡7Ÿ‚Søz¦MvÅJw­ÏlM<êa„´½7Ü3ÔŞ8µ´»0Üóèö“OfNÎÜtù+ê~xãÄÊoF
ƒqÃÁ8ì Ì&!:»>x¯8Gq¹«Ê÷.÷’^s¨‘`d6‚&XMIi’UdHÜLÖ"M…>˜å •®ñ”ÑÎxÌújšªÚ¡2ÉØ$¯&í
K´¶+í1§ì4ÿõz‡2X?åÍê²Â.Ë(‚’™Â%MSU—WbyÁ)©ÒM2^£İø(‘^’r§$)q1Y¥9AN
¿¢¯ÅêşŸsºŞ»Ür^D»9;eNVT…CÖH8åÍx)w¦*aÒĞh†Mòmo|ªhm8²"¡ßG¢¡İS–¿ÅÃÙ“9Ü~t)fÄÇZµNÌò…ãÙÕÙUF:!Ô½ñÎmãi‘6(¿9id}y±%T	W#õPUaU4U9ZØd–fô¾÷¨c8îHZˆ°kT›WÒZyQ¸R‡ğZ	r·<x¯3wËøã•áñgSO$Aİ´~"¯2.¡>ìp)v‡õBl˜¹3õÀ÷Ğ½æ^‹â•ßåJ»Ëè±'¬=³CáW±ÃØa ¯x‡+Wxm+^fœ)Î—°uèÀ MdWËhWÎ[ä}’¤=y1C`c¾CcÍÏ³QÃèC¡‡`¦Óµğó‹÷ŞØ^1¾˜xÑc»vë.÷÷o´2«$o9@5&µUlD\+1­TÌuI[EÂâq	œ‡–ğ7bî‘0EmQØåÎ½…É«áo‡ÌªâHB¤fÑTf„,&¢Îãß's‡ó‹ûKo/ALoNÂFÌûFÔ%Î[àşœHµ£5-q›F:uH0%²Ê˜¾æ§<eJõ†°«lŠ†–¤}(Ãï ã/§Ç‡¦.ˆÃÈ{—ÏÚşN€=b¥ÅVğÃA[y*á’«Ë“FaFœwÜ×ö<zê/‹ùõ”N³ÚËzubôÔŠ„ÁÅ¸ twï»çÜ]LAöJNq[)âÿ0jklsivÆW'×¦8T&Ü8¦ã‘Ä]¸ë‹’ø¡§ r®r¤qÈÍJĞ+ØS‘ŠÆ$«'ª1§œr_&¹²Ÿ¼óZr¿Uğ•”\zsi—ö÷–ç‘éuoe$9^Å8Ü¤¾Ãh}§ü]_V6¶d5±œ0kÄÊjaéˆ¬€õ\ÖFŸ~üßÃèF#Åj· 'q?Ó'ø"¶âÿŸq~}RÀìúÔÖ¡ßš8…*]F‚ÌÕq)uJ˜¹…™+:Ñçqì¾C{ü«R—àoâ¹S‡óH§¹9¾1¹3¶· 1!Í&‚£ª¬r”ÎŠS1jLğ7Í±L#‚.ÜÒ!œåÆü=w²xÀ‘æ »ÈÈ{b6‘ÒËJ»Êª¶|äçım¸Kö]zøûŸùï ‡Ñb˜y,F{ÿKÁ«“ØÕX5d–WÂ¶ƒÔù²„^ÊŠrDJBqyV›÷Ak^Ö¤-«kq³¦AøfÌ¬°+êjÌ7'á&—hç¹×°®”HNCè	šL¹3Áf¬vªœªºÊ®±pûp<e´÷6™V•â‹¬¬EÁ³&‘Ş6ØeE4—[êä)£Ğ²ßFaÎ“óV¢õh6ØŒ6•:·NšUB5ŸÑ›f£Ÿ€sFy,h;Ë½í·=È ìŒ7Ô¸k ªq@ï1d‘ÌóAC +5m#–a"O	©>
aÏïÀùc<v máù6·“˜Ú{«‡Õá®tó~1ä0¬ëwr\@­Óëôæâæ$9EN	L¯?_fV>ŞâÍA³‚›1A ‚Bf_!#¢Å6xéÅ_€_Æß»<¹0zÿÃ|1¹°,‡¿s{†–ÌŒ¿¼hYíËúÓÒ¬Ÿæ‚:©ÎUFÛègiZ”â2;^è;ü7*àßÑˆåK¦ÖØ­¥û‰MNc›ºU=éT,¿şŒò:É#¯m“H©SÊJM…„]‹¨uÎˆYeØC)nwç,Ïøm£ˆf ` q&J
sÔ¢­#z³Â$wDª»ÌÎåSÏñ”ñu½íx°,s„0Ñ.'Jq“†šCé`Î¯WšÔM.¿|…§Œ•'§eä\ù€ÎU$³şŒÄml!Å“IcÕÖÃÖDU‹>‹§«{¨wëjüÇíŞy<Î/R£”öPŞ´—±ZÓ:dH;e	—ÃNuISfoëÍéÕ	Ñ¤mLƒF…{oQÃJõ¯?_&â’k§ÒÒNòc6(	+¢6)ÙÂñòÁÜê9µªSÌiúgÄfåvµSÊˆÇ7'WÁcL(éÄÖ’É)gOì{Ë'V•å`ådš˜>qìÛTV•so~"!®WZ9j7O/µöÄÅ¤YQU;5Õ„MnÖe`ÑCC«P>Ö“—p;DùÊhïR;•æhÆÇt"Z˜¤ÃÕ¸InFìŞDÍ_ä²Ú½<’İ¦2ÉF¢¢e	;X%FœæÅ:¥^’÷V#•¸‰ÓÄ>MìºŸ>8×Çz¥5^Õšµ5µ]Y÷ëƒ´À¤¥:w¼]Æ—ò\ÔÄXÎÒ7¶¨;5˜ÏnB? >pÿÎ.èß£åK¨cğı<ÏøÅÖ¼’)îPè¡7)qA\$S.aS;ã¹¸)\ó×£&Îê…:ÍÄDÊn=¡E‹ZJyª²F¬¶+ñŠ
!bï½â:Î»'	ø3ñ.7¿Ø‚§ÆLmtûvj:º)È½:
ÎåÄÆ$r"ÌéÖÁNûJq5b99<ñ{L‡wngk‡N¡Å4tˆ^lè]:#¥„ùXİGàFJŒÒ‰ó2ùwšÄšXx²ø”ègtãx•0Ë¾ø§¬	ß‰>´µÎÜÂ9ü:¸¦úŞåpøs÷ÏÊÿQ¹T€³‰”`l{y›ZŸ$ÇÅŒÆ´¿¼7º=s¼ ^ÙÛ³Êœê$+Ü6ˆ-Ğ2«v~ü`aƒê6Ç¤ÔöÌ¶NÊnOI “tb½ë¥Fè×¡µ¾eFÈŠÓàx˜äÕX]ŞTÖ“uEfÙTõXMæ”!Úw“gÚıšòt›õÓí‘CÓÚc2¢iöîHBÊuáÖµ#Ãªq~[}Ëµ¯Íºu‹Ş}¡õJ·ÕnÑì°{Ó¾g»±Ûµõ]ğûÚ{oÑˆZ×£C^D/MDÓ¿s« ß¿½!ªòÊ¦`Gò¤âÈ<ôøèäË£»•îÕûkCÇ}[×6…u™O¾±g‰š\Æ²=62ÉV¯´^v¼.üÕ~Õ±^=5„ÏÓnk·ö¨MúÏÁ§õKîVpán—¿w»òbåæ¨yŞeN¬ÇíZìplò¾ŞÓv÷J0A»ô!:išŒ;N7s÷àÖ·Ùn‹GXÚK¹x%bKTe´Ü*7E!»yÑêá&k¬;ëynó82m@€6ÒEGæAëo|—=ÿçÏ7Çªq‡º¦<\ón­(È	‘·‰vı·Ç¸x-ˆÂÄ!o¯o!íğ´w¾U¨¢àe=”hÒ*ÎÇ,š’Â)©í‰B²ÊÁÓìòhìx;v•B¥>1®|ÌIê]Œ(äBo‚òä½£pÎÁ{—“O-­Aúa«Ş»ö Nôo(&8:€Ã·\÷Íëõ¹ÁêÃ±õ )Šx®E0Œ{o^kö[ëÚÜÏÓÚà4üzü–š½yµÌÓ½3p<T~êê;°ï‹=O+ùÖÉG{~õÂÊ§	nm8á÷½åzŞ¼şÅª½&.öûˆ±[û8xÿ|‡¸–o~³mñP¬P¼ÆŸyŸ,]k[êÒ»…¶(@Gÿc{PÓ’"QP„AXÏÕª!—B¢(¡Ä¬ ç|-cÕÄ¿÷ø•‚ÕZŒ~Ä¬ˆ%(¹ó`é`éd<z‹Ö,sì//lÌ¬ÏlÌlMHõ-6®N­OoÌl#4ŞÇyê‘ÚÏ¾ûÌOi8ÅaµbZ‰4ª,Ë.!®lOÎÏÎBüeÙ]>X:^ÚœXŸÚ¤eÕìópáx~oyg|{\Èn¯NHÇ¸½3¾	y}RÀˆX1âÍ¬NIhR§p(J»Ê"·ˆŒ"V ×¬Má9Û;“‡Ÿ‚{øxìÁ·iÎìÁàËd¬o`Îâ×Ïô,>]e'ï&©¤ÉG×_L½Xz8y=Mä®m=Õ‡novÜÙí{Ô×¾_€ãëxíù[ıJZ´±ë»=erëŞ¡Ì'®HRÚ]eğÚÉµãGyE^ÔP&†ç_&-íaWÄ¢Â¬§îÁ”¿Èãàc	Şğ]nŞ¯‹ÖúwU.iCSj½·nmÜßHkÒdEy±<uT”»7Î˜!®”«Pò_âq[‡®}8\û¨{å>ñ¥Ó¨!dİ
8Â³éíI¡{Ç×âº1‹´+à¦Îã¿íÑİ•ƒ¹=‹ln)=X¸4¬Ô@	†ÄÍµ6•CŠ\`àÇ©AL‘”È ¢å¥ùh_{P‚Ú¡°É¬èêw&!\Ş_<Y‚3ì2«Â¦0+Ì*§Â,Ô‰))À/øÚš‚iòp–ÃÖíàTŞÄê4‡ªg8ı—¾¤zÄûå˜È1n3Õ¡MëHÜfÊ®Mqt3"¼)Ò ¡¤3có&†}ß í=rI{£¾E~1y3Ñ¸½.
™ñë·œşĞ‹“§[é÷<«¨æÕ›O=}+y”¹ozË…Z¼pß–—Í<Ş\Ï2’a¼ä›;]Rí%ƒ÷ÖdeÉ‘a‡ã³ı+b®‚ˆ’Ü	-J	i&RVÔd&-â•›dN…ÃüÖNË·"£ª?jJTEìmaÌH
‰¦†%tâŸ‚s¾íOSğõÙSs×1~E86Ğ<BàÈÿ!\õ7ş4=É/œ&‚t|LA .qçúÓ Ê‰r±ºÒ-»‹"ä¡/S>£7%6úÒAš["ù_;”atéƒ¢°)À„…mêF ãÎFÑª–%)2ëÁXşÛß!–_ŒŒ,=YÖÄM‹æ¹2¼²bF‡ê3J^8ÃÕ˜YHRá”—§À¿(’Å`ÁŸv)àÂ÷y<£ß¾}Æ¿İ±_ÿ9±€
oŞ*Ä¸fÌùsñ¼8,øê§ªäÊùÒü;2_TÖß÷Ù¹(‰NÂŠh™CkÓØqvmwádqqŒ&¤ğ0ˆÚœ9Á•Å©)!4;§p®ÿ—[Ôå)ä÷§xZóäY+$!rñ\¼N…Ó›Æ¡n&J¡¦º¯!6Lø£â;:Ìä…Œ´ fµe¥ŞSt¥]zQÚWtü)_ÑK‰u\fÛwò”ÑÆ¿ËF±¦¢+'jáf~É*É¢/ëÒK³Ñ’R/Ø‡s¾‹Ç‹û™Ş³ïşÇßq­H	Lrj}FÈ¬Ïk—äµùĞ®4kOf×&×tÜ°š80kÌ»K«ÚF0¢™•íéc›Ê‰tÍóN…å`VnÖ`|şİ<ó2m´ü÷$æx³(µ1}2w4µÅ¬OŸÌï.;eà›î/¨k³G“ëó z7!³3.4ˆô
³zvwtonM/¦·nsj“"Œ›3$£±«e¶}§g“¾çÜŒåù;`Ÿœ¾£/ŸSäµ»²}wæ{;„äzOZ¶Œ("2JÒb}0JKR"Zêˆç¹uÎïãë÷ÖŒt&jQ4cU™E[”U­%VÑTCuY`¤½ÅSŒ”ë­Œ$E:pU1ĞY•yÅ›'S’Œ4+¥	V˜‰dàœæé÷&ÎÖ—~ì«…§Š_k‘9Õ&•éxvoIkÂÕb¥ùpşx–C/ñ*ÁQ˜Øo}sœÔq« Ÿá%ßÓwz—àªÈ*Ñ¦Ü®µ*u®´„uƒYo5ZÑ°^£;Ëå?ÂSÆÏ½Ş%“[a\VâN-£iF¬òZ¢©lhË
{´8eTúÑ9¤iO{"ª$ìj›Ü¢1	8¦7…ÎMyh9R¸şOk§{ı÷Ÿúàƒ)³‘‡ØÀMæÚN´fÜù“9”æq~}r}j´8c —HZÄhmZ’oz‡k²>¾¾%ıÏ9_ë7|ğÁ³‚6ƒ#Ô*¥%z!CP˜!m!¤Èû+eiMJ;BO¨f3:æÁdÏîÏíÎkÁÅ¦A2ÔÄc²Û¼C—­xpäÜë¡<YOU]‹VM…)bÛd•pUkV^<?ç¯ƒ†O‘¹`3\)™×T¢D3á§}y]‡Ÿä¹dÄïÚSAm#ø„„;ŞÈ7
½EO1aU7A›&aŞ_O4‚´Gï¯ÇÌ¼@Õ8`DJùµK×ä¤-¨j©Nˆ ıôæøÁ"¶©Æ„lZ*üöY¹™P}û›Ü]²ˆşz<{´ 1Ï¡Ó¿¿„ŸögÕÑª¬ûÎù)éÄAı—ÿÁ){ó‡eÓ|ÉŠßê#(÷òÚ¤ ‰dşñ;ŞÙù~aµPÅ›
9&FÂ‚ŸÁˆt^Úgt1D–Ô/{ö‹|€£šAæ2±QJ“”Ø(‚÷ÕéÍ	DÕYŸ”ÒV¢0cæpÙK·¦9,=ÎÖf0ç†³å?Í£K_³_‚kg‰T¨¬uH±Š7ÈipÙ3b«¼"Cò•òÚaå_ğæe"j‘ùèà«S;£È¦†XÀ ÆqìBHwŠ89§¶È*>ÊOª‚â?×aB·="ş¤º—MĞr\£<´N©	^ˆq9y8¯ED§\Õè|¾I\n]§Ã$îtë5¶µ¨…c{îŸuÈ§§H)Âˆ²rÆ<)1-.rdÊGKtŞjì9\øù·ô\û»¿µ+ü®çhäÂÃÉQqeù`öhöpîxîx^e:šƒ¾ZŞ_>šGİ~<¿>³ƒP>“F©Aˆ¾‡W•–÷Oæ÷WöàuUnC-%„÷jÓŞ
„òàkª,"Fh$õ˜y8ÿÖ¸´9¾5}¼t5ˆEêE,	ÒcÁ¨6ã<™„‚À~CÊ­	´ÉÖx@bã*HØá
NHlOmãDÁêäúôêÔæØ*‡å‰4ĞH¡p<²x</³/AÛ›á>°­¶Ã(ÉJY_ÆGzW9iQD?%«ÊAß*J‰ŠÒ"ÿM8ççyâ‡ÂÔkŠ›bUy=–Ch’—êDé`:d‘ÙÃ);çc¶£úª³X %8eß3®Mƒ½œê·&V'a}ruz}lm|ubÂ>|?˜Å\ˆĞÁ`!¡¯æ—WğWlÙM\€YßŸ=dV¹Ecêh^ù1¨ãù´á…œóìhx¿+=¾üÅgÀóK­ñÏ€ò
#KÂÂÿğB»¿=¾¿¢±í!2ì<76~©ÃØ(v‰Á­¥¬7ëÍó®”[Ğ+ì±ŠqÌ°Œ/ğ”ÑFâË	`=ó’ŒÀ,(ò’”‹–æ™ˆ#Z×Ôc5.Êù•™EùXÎmpg}õp)Yr§İˆÖAIŒPfÆ•%Â¯sş%Ïízp¦]?ÿ¥>@ês¦Å}êÄÀQLq*tGH„¹ `½PK!Æ­!&´ĞW1ïq?·o->U;Çú¯:Äk:ğ·ó1{²Ô¹Ê²:Ø5£Ûè.»3îŒ´ 0qŞì;”a K¯—P iŒ^–d	»¢5Å­a›Ú®ªË\ã¿æé•Ô‹¶7ËHlD*Ü„¸Cç.ºKjˆ=•µ]ÕˆÕäM9j²_}Ë
A»Eÿ7Á©´½éWÎœ,€›S: ™]cny.f°Y¶ğ)Áûäî¥FÑÁVcNîÉÒ·çîhùhV‰øÆöƒ%\iÀÌS(Ë)–Bü¨[İ³KlGfáÄúŒdt×¼k“L¯3Z–?˜A<	çB­ZŒ313Õ*‡È\á<4	Æ“‡ÅòÎÊ±Elİw“[3"#¡­=Ïòk—Ì?_NasåG½M}N¿nñx»Ól_ï°ıê2'ÇA?#M‡ë±j¤¯©›Áé¥{Ø©ÊÑËœç'?ø Õ (u4r›Ö¢pÊlJpä9Rß•í1LÄ\ŸèvÆWágdÕÖ“¹C¢—ÇIø£3nosò‚L@/Ñ‹
bÆ[”EĞñb4+Ôu>Úêš]œtù¹s‹x÷Ûcà|ÍB°aS™÷7'vÆ0Eœ3z}zŒ:Ì 6F*í<ÏÔö„€²È[(da [”&T­2ûŠşoğŸvB#‚ğ#P[5•P#T–Ñ^JZ ²¾šÖ)7ËlÜüîoó”ñ]=íçÖ	iiNd¤ƒ©pYm7T¦HÅ[æƒŒææôw;”AKk‰6£2¯ÇËa»Âµ+›Ü\±9næTÁïñ”ñùVé@CkJ”4¦¨CnWp¤¶±’Ú)§!HL{+I†¢CÙHÉè•zq!•:¢µx9ÑÙBæd#¸àøK<ê¤‡A‰-¨:´eµCÖˆ5åT å£$y-«)Ê‘,‰ÁñáQ'ÿ¦çlÅl0V§Á×ã Ü_ŞÃxƒGHOÜn¸=¶9LEo‰Ûq^]ÎÁ›Y\‰ NA€ÿŸ&.ç2Hs~VÌ
r^ZFûÒƒ»(d\Y?	‹
7Úü>Kò#=ïî’Ğ%a5fP²eY'ndV‘^iUØ$y)˜ ×Á(‘f¼¹`Ş—•‚ièi£7ï.úYi>V—cølä'ßNs£wëÁüBşº…Ş #qª	«R§?çÈ?y¹®:z‹®bİy)ã¯ÅÊ
³Ì.ÇÊ‰"”Ğ®T¸æ/H.ºğX²PqÔöo
œCÇcu|}âÙµiÎ$zPÕàø.ƒÓlPgî§–!İ_<XQ˜ÀhCèöóPªâ“—ËšÌö|Z~j®Àµæhƒ‘%ÆÀ%G¢—°VÌˆàEè$HşzúzMÈppæHË0H·N :çˆu‘,İpöÜöĞÓş†ÁNê (îòŞÜŞ<–¿!8R»Ù‹
‹°ëóÜ?%Oÿ¶eWï6zA{ø‹ÁlÀ(e$y_!XH0öıŒe¨yÊøı‡­¾äÀêXÂMµ]RèFÒqF²^FêT:b9n¢Ò~òrùÿBï‡ÃÉ·ÉÎUÖ2ZK¢ËS`ê‰R8MØAãÕce÷é¦ƒóéÏY!Ø7î|Ü¦1Ëm‰²Ú¬2n@Oæ}|“1"®‡q!âdßºp×íi¡OgŸù§•7ï\ó}yoÎ›Ašp_QbUbåXNÈJÓ>Ö{ñÎÓjÒ*ÇÉ|³0Kæ„´¸è1Ò¾Œ¿­EËñ‹;.ˆ|Kë>1ù§Ğú§1\êqdì#Ä"xféxAmQØÔÖãYÎU“Ò8Á±1ÍmiB×U'Ñãß'Œ£ãOÿığİûÏ6É+‘l´¬´‡ía‹¶¦±K2-%­Z›„½Ù
i‚ñSRFkU@ã€_“l(ª²ZÒ.IIŠÚdr~	{cúÄ,˜ Æˆ±E4Á-"P²¹İÑsŸÑá¿ÉóT…“Ø¬n$,!8¾ÿîˆ‚Åó×ız\"a1ùv)Ãñu»ƒÎÅœ2Ê[‰XÕU5YÕ:ø²^`|¬ˆârøºxÊxÂ®{TXU¦˜9iQXã5_*lÒXdõx%QÕ¸œ²{<e¼¶Ğ>Z‚<oz©“Ôá¦µ¸¾àgšQª*\zwO‡ûĞI"Fœv•’öhSş“Æ²h¤CV÷e½§àÿ}<e´7WÑ	IA†Ú©±ÃQO6”MŒ©%VõbÏöz6-ÒyAâ”PGÌ¡©++Iğg"ÎpÚ[ÕâuYç}Èó$m>½4.Û…  –¤ıyWZ§CÕx-T†€.4jü1Ï“\Üô¶'ù¯™YyñÉ§.j'ülıÒ)ş3zì8>u;c›KHI#i’ÀxÁ	’õ±Éµ©-°bÛ¸õ)Ï³·=‹wâ×YàH³QğÕ¶dÙ‹›â¶°ú³™´|Ïr~Ñ÷2-óåâ×üÄ§$§!ùêÌñüÑìŞòÉÂ:x0r‡Ì&³j­b†¤Ö&!–A©~öej8Ó ‰j¨JûrBs´¢±ãFG…ÎG‰YIg©~ŞQOı5E3^÷éˆ”Ø¢('@GÈërŠ4Š-ÊGòê“oçÒÒ»)è—˜)êTš6UYefHÚÒĞ»R,cˆ§ŒZ{f–Uµ¨¬ñ¼«ìÎD-	›¦"7X
üeœ 9×¢…Èì|‹~äÑ·Êë 6­M©6 ~«‡ÊÑ’¢h&«­û—M‹ä¼eÁ)+²r™V©ƒË¾Â¶£yÚ®Y²ş¢Ø .ºóŞL–fÄyMk—ÓÆK{‹„Ş…’mà‘Æ¿òè#Ä4ş¬Èè*HÓPWYİˆ:¡¿êjÔ¡µhªZóöÑç¤g„g\ôDFH0^²¥M …äVHb„Û(¸ªEX„$CãÄ‚æ á¾$ãB\¸‚M<^ß.ä²ŸÏÂïVëó¿¼¿È[×½xSõš4•H)æˆ˜TxSeP2ÊüE¸än>u„×^}î–ë}nTˆë#“vü	44¦å+)@ÿ­a7g×Î(…Ä1BÿÙñ_ëà :xÙ”0ëÒi2%b|º@‘Ì€ÏFË«	K¢è2ˆ²ä—àöî|»ou’­ãpÄ9£¿¸ÂÄíI™ÂC‹ç·/™™tà‡û­P³c†9ş}ê/9Á÷š\Ôşxü2qZÅ*O3,9ÊA$§ÁÈõñõLCŞ&¾¿'¸¬il9OË½&½…€,‹DVÈ
Á7w•4MğC2D¸GÔùÉw S‡mËCğ×h‡³Od¯£ä1Ë_ßx&Ù€ŞÃz2B
(“åHÙ¥»¦jòÜDëO¿Ó2í2H‡í1‹§gõR£·(1ó‚Ÿñf¢åäß‚s–x„£ù.¦İ(Hh™UTp³Z“²®iª"Š¤½”¯àb@Í¼Mé„S;ãäÔÑÂ¡CíP¶GwŒ¤‘t¾şÌíÚæyÎ_o³*Ê²ªêógYAeÓÖâ%%„¿Z'©Wê¹?ÿ—Á¡f‚Fí2šÊJ¸¯È«
ä7uÊr¸™4¿C˜âyòu¶í¯‡íÉ¸r^–})OÖuë	»ºÉMÒ…y[Øb9N»Ò-Ìú2ƒØ*ÊyuJ›¬-k	»Ì®6ú°Œ(Ï}´oSÄ)©LZVL)1§ÕÜièÓ2—)šì }iŸe´Œ[#pÿ–!ŠH#^šÑaçöÒgyÊh3Äå½i"ç¢=Œ¦$ÇÕÜR¤¬µ«Ì
‹ºÉ2Ü}”:ii^ˆ)I‘H…MÊ†¶ª6	hoÊetå¥9»Ò¡[/LªÈxR$E¦ ì1†°'
®ÉrvµC°Ä‹b] Ë“Y7´¨Ÿ¥„"WT&™“»:OßĞZ§e´È"FÖ.éã•pÊG9lFÍ¡7¹Óì0ÉDMrG´©²%~ZV÷ÓdF˜q!¦8"‰Ÿn_ïĞ1„ñ ©ÕxL!­ƒ¶¬¤ÎÏ¸RÖÂOnAKÖƒF¯Qœ‚:/åa}Ğ;¬ ïg4…Nhæîc“§[ygÙ %ĞtäŞ•
è‚)+¢¦xUk#>çlñL÷ÿáó³ Ê	šü.—“Äœ²8yÁã©×¯yÜğÇ”˜Ãç3«3›cRİ¦§T·Çp¢coiwé„£§Ú]Ø]@D)•eo…Û–c÷Œ%t$-ó·Ç7¦p©Jl<İ,ÓzQˆ±$2JtÎ’Ì©5í-ï­ÈœåØëà¤]¸í'ïÕáæh…„«”$íf½Ll 7î:GFdEœ¦¸IfW˜µµP%i—!‹ -eD,q:ywÒ¡Œt K0"Zn‚~H‡-¡z8E:’ÕHCUñêÎ‚}u‡2XM-TRÚ“ÍDÕ›–PD¬J*ÔT”¸ü9·dù5ÊÈÇs^pÄ™ Ø%©Ad|F¯ÎWóQ~ŠÌûp™çëx¬ÃGA £f­=éÙUE-V×Vbf9èìx>˜‰6å5^w'ÉhÑäúôæôÚäÆüÑŠÊªµ¨bz}êõçy®çÿÏ“~_WëI=UE©#¢eµMá [\R45¶ˆCÑ2ÚÇûúõ4.åcüŒ‡•âÔ†ƒLy*²rÌ¢°El
“¬?Õ–ßÀSF;WÜ-EM*s¬®rªkòºÌ©rÆòÁ,iP7UM…™CùÆÚ2hÆÉZÂ®²¨atøj²ŠÜ©6G2ÁXÆ7u(£`‰É3nJR1,©÷§üy!£µÅ­Ú§aşçe°ƒØió2Âœ'í©xXD’ôäÁ}ßŒ“âoé -õR°Å³ü‘„ÈyXM5fëf!ëI2Ü4Ù_í Å “HgÜ¡i*ÀşÉj§Ü¦¶hA'Í`­ÜHøD§é6’Y¡^¤ Î5zYã¯ÉÌZ†Ì€-3pVì=gù{mÌ%o*œ
ƒ‡µÅ`Ú­W4ÕFUSnÑ6”Öˆ5ùËpÎû|ÊwYB2ÇÊI‹Ê‰¼S2Z¢ƒ˜Ñe‘›5–pÊmxcê}¬Yái¢ÑRiÀŒ»µñõQ‚‘¤ÆUÜ³û¶1È¬TÑ Ô!Ş¤ÖG÷F÷LŠå×ŸÙÇpÉwğDü_Ò|x±½ã}]‡ãÅÂ£åÆ£…Á¨ãVÔÕ¹çOÂÀ$"çõgrs×Ó¯¿‘;ÈàH27ÅšJ{Â*o&KŠªÆ¤t€€Ó—Â&wåHnC¶Sö·'p×%II)|yŸÑ˜„,nØ†&Ú™}ıšB0;0|—•™\’¶×ŠzN5··xˆ®öw~\mƒÚ&)RBÊKÉíI‹¬ª@HØF¢.ÅjZ¦ÃŠ.
òwuR0ñ’[/6B´('4kÜÑ²:WÑW¥9æ»yÊø¶ÖÆ³ÆnòdÆkÄ„÷,ÕuâV} Ï¹§Ÿæ)£MÊb tnPLJˆ¬Ce“è†`SãTØõbå”åßéàÒ¥¡®¢È¢·.æT4_6˜ÃÓf„:i›IøİŞ²Âz3nc°ÈúhA”f]e™-n@²š°ËOİõïïcö%)XòĞªùúH#QŠ5’…E©k¹ë—Ïxh_»§Q‡R=ÀŠY’&Ò"¡ó}à–ùëÊ2gÄ~ ƒÄjP¸©6Ë+k¨Í„AUŠ9TÍ``8÷å;Í¬²BÔ›]e‹”’f¡IiŠÖå¶¤Yn§ó~ıïux_¼WFª'RÜªDYeSâ|ÌA:eå¸•“Ó¿ß±M³DÊmè%›0x
^Ê]ôåI#&ËºK\ŞÒÿŞ¡Œœ7å/ø3’¼@çÍ‚”—Õd=\VÙd5È*×/?Ô¡JH	Œî”°¾†ú¾ZÜn„KJdfÎ ı0O{ü³64YL”U&%fŠÔ’U/-dˆ¬(ëÉùYN“Qÿûj+l„êgÌ¬2Gœ
¸¤iÂàgÅ¸‚–çÂÛÏğ”km3ª›Šš¦"¯©á”$#Ö!²şl ¡µ%«êScú#<Ïòº=p“—\m$——ƒ¬iË2“¦oÄò~·œQÿ‡ÊÈŒô@^˜¦\:Ì³KçN	õDZbKÚ¸pîG;ô&ÃRrgÌ¤­G-¢l´"³(õî½œ(:M™ş±N¹AB%cŞMÒ!§eUyMËòøçãy‰AğCpÎOò¾‹.òƒÖ÷ø`Ş8pnpÚCm%QWUäÍ˜9d:âÍÀÅó,¸lzZÄHó½«$§=Eo%RÕÔU­IÈg¾ß°HĞ;à0íĞ"vó»á·ÏòX¤Ï÷¼İ!iOg¶–<{ÃPFo„Æ‘´ŠXbc%AÌ!¥¼…àÅóYI1Y
•e”8ãc„ù€—ÃB)¨8DÃäöbşOwµ“0™`:T×Zğ¹t"Ê—÷°¤ŞñdÁ£«€¿eücÑ{}+§E¿^L‹²>–ÌF³"ƒ†òÎ³ÒSşïŸî+¤ôŒ=y-L‰
¾ºª¡ O_˜êÁ×6×áœÏñDß_:‡”ö«Á8v!FÛÜ®Ï±İ•“ÙÃ…İ¥si¼S;“›3ˆï²»rŒ{Í
Ûş¢Ì4Ğr›Z_ª#1–ûÙ/ƒû=éc¤ÙHS]V˜4o! ¢å¯ûjÉ¢+ÑõeîöØé~8Ä¤ßÖ¯Öf÷Wäví²Ör`:2½Ğ°Ns®Å?ï”>#(¸Œ„-áT8#Nø¿š¨%ŠÉŠÖ‘,H@†85÷ó<ıóñÖÒz–°Å	;ò¨²ÊëÉr²èKIŒA#é Ã~ÿüR'Õ@Øcöh3^”h=‰‘·I’Âª´Êjœ	û\­¼§ .
ÍqÄ&­Ê-`ÄmD–Ô)ëšRÈš<¸øÏ³üFšÌgtı—^aŠ:µNiš($œª’œ‚ŠYãSpÎ/òr,˜¢SœÛ§é';¶Ò³&ğÈåt7&»}eU:±ÉŒ5Åu¡Ûşå'/ÇÉ¹!jãäŒŞFP¯-26Íl¼L¿"ÍIjü(ˆŞ¿ïzüf¯Âë_½ä–Ú¥¡÷9ŠX×DÏ»ÖúkŞ½§.GĞŒÈ>Êı±~í-‡êF°I–¥Cë¡ï„Ÿ~½ãC}åÀp}3&YÕÅƒÛ±¯‚ÿö’›\¸Ù¥/ÇÍ"¨Ò‚séÑbÁ|³]	·) ÓL.ÈŸ(JŒŞ¢7ëI¥±>XÑrˆï¥(‹ÿşâúù‡,ö	VÜ^àÆÎß„B^]RÈN‘¥_Hvnl3ŠfoMç,?Ÿ)s„§<²r¿	íÄÖäÓÉõë6u3jéz|óI—Eœ
4&‡»_õ=¹3rï…Öà©¤#gyßàÊğâÑ}ˆöç
Éb°8°t°òêîa÷àıÃe}_şö!GzÅJu#ĞµvÓ¡±kœH÷~ËŒ@g½û+ƒ÷Fï/Ÿ#¡ıW¬d¨ÿ¨çùüî|QhYï<ê^($@çŞxvsõúÃ;£3Û§m¸ş÷x<¨oÉ§!òJùpë{â)kÄ¦,iÀóEhuQ!@½‘qTpƒk!eEF2ågİYÂ „X%‹UÀc¶ÅMZ|Øÿ|Å‡}Õs2½s}c¾
)³r0R/Gë£o<ëzp÷A×ÃÛgn¿ÅJvöÆÜz2VWökOzwûõJÄĞıpfunu|«kíöÀóÙ\±’“½¥½»#÷XwÉUšZ»±3ŠÀÙå“¾s#ó{}‡sG÷3‹†É!!ğª•,o­Í-g	ÚR¾üb%qJ7v®Ì¬uŒo_Û:{’?¾b%‡‹Kƒ÷÷îë†yioa¨_>{ijDpmtãÆÆí	ÇµÒİµ(äƒw°ˆaõZ'½Yïnaşã–°¦wÑ±WKO&p©›£N¼µ{\ì?º;Ü¯÷³h˜û/î±ˆ omM¯O=¹50º:÷êŒ:QxÅJ_[ßšØ\JÅDmlëÚÖ+h›ôâA÷ÉìIßĞÂúôÓ3*bÑ+9^>™Ş†§Ñ“Ni~öpiä¾NqG÷Ëù…ı•WİûËg\€â+Vr¸¸·0<{´’ñ³Rv÷CsYÄúşûC+ûÇ÷†GÎ8¨%W¬däîàÒÖÌêM‡²äÊÍ­¼a-»‹ówİŞ¼³¹x¼¼s¦-É«6×Ü‹{ƒóËY_¹ÚïlN–e5™éööøÁâîâğ½GwuU&m‹O9VÃ+Vòª÷åı=¦«a»YçŸ]·%jÉÂÂ0î¬Ÿ{u{ ¬Úëa'»b%Ã½ƒK¯æ_Şpj­éöÃî£ÆWT§WÇ×ææ×g6'vFí7«=ëhÅåï_±…ÃÜ	z• “)ı¼yéùÔ¾9ôb%ˆâıËâî6¸s íÊ{Šî¢‹!³¾Z¸!sµÁm ĞVÅ‹ø«*(ƒº¤Œcñi|ë$Âòƒ[Â”z¨*j(w=šÃİ[–ä³qÜ[¢~ÿr¸;¼zà­Wg®ç%Û¢éfï†±Ù5ï¿›õkÏ‰ãßd»e¶Îÿ"kë··ïÜƒ‹Ø‘ZìÈÙûªo¸ÿp6(¢%¸½"iN–'¦Ü|yóáİ‡ëgjâÚ+9è?éİ]z5›ç\ ’ÓÏÀ©2‚¿³15potãöÓ™“S§
ûüúûoW`|êr¾”;íÏºÒA£€"hWZ÷é¼ÑW¼ÑAÄØ¸?­Áz'ó'½´¬­N?¸>ØıâşĞ½Áşgd7¯XÉ£[O'İÙèBlƒêôz×£É²+'¥ú†f×&¦6®ÜY¢úwN¸3ZCË‹"Š°GËÚj4ë£]—AÂzÁ¼BNÎNİ¹âî-?ï¹r0›÷Iªoğş³[f!+ÎÏ¾ìî}~ş¿ÓR¼x£wynôYëF¾œ ç­ÈlG$KèƒÆ@#HKtÌ¾Èù¼Ñî+Şè«•ÁŞW½OîX5µ(Xˆ…ƒnƒÊ¤iïOlŒ=½ùôö«¥ã9Ã½Ìƒ”|ïı·Ã½ğ‘<hıïyA&R‘;É|Ìr¨JÌœ+Eš£(ëÉKí—+¯ı=¸”§[/ÃšAÄ“ääÖä‘\¸9Âº,(#lÌìŸøóÅ;Ãã5Ú·H‘­N„İ×wUõ°²ßı°{p)åÏÒ`§«–ÌƒëjcqïşşøÚ™_İÅJçï±Ş,:ï+/ÁQ4›ãï<]½ù…˜»©k{XÉı«êû{#€ƒBÂ(ìêÂÀ. »4{Ò}pw°{äîavÉ8õ
+ypU/¢ïÉõ­®‰F(%fzFzær„Mcég÷ÚàıAˆÉög=Ù›ûXÉ£«øW÷Fú_õ`Ntcbçú£™Š'ã‡èqi|ûÆÓ›Û·ÏõÉã«:]}¯ææÀi2"p„gÁ}Ô	Ì·f§ŸmãÊê­òŒse +yrÅJ «—w—^öÒ"Úe¼ûêŞó{¬Ÿ%éŞ¡»Ïû†gw6FÎ*yzUuîÅÂÆ±šœ–€ª¼;ÜGyh	T²¸ªòÁ­És•\­’¹ı…ı‰§“ãMµ1±Îüş}‹&èŞç{‹Ïûö^ôœÆ:Ü¶#}üÕíÎ§¤=©°3wí*)j“Òª*©GÈ¦úZ8gäıËg’ß·½ÍÇà·zŒéG.‰\]»îQÙ”d–oûÃ îØ^ÔÛëdùàŞ«îs¹@Æ£qîùBAªf—w—÷úwû^ô÷f©ÑA¬„¾ª/÷¾ZzyÓ¡m€6ÙBß&ï¯­İZ›yÜ5|o¯÷ÅY(­»êhœ?XZL‹Ó TÏï »ígïõt/½ìŞ~¦¼ôW¬äÅÍ'·7oÃ@›”æ[àòÌæ%EI~vx„ëîAßñı¡³JW¬äÑ‡]#]ë‰ÑÖÜŞrVhô²÷ ¡v—î>ï>8e*ÅàıË×NzÏ¡™~úãÁ.'2VµQkTN…SiSØäö½ù“Ùµ™ã…ƒåíQğµZóÁ2¿sˆı¥°´^f•SíYeV|ÇOˆ9E0bŠ4’F^aæ6lÓ$N8ÑR½”×Úà|½–[^´óŒµ60¸“ZÁx3A3ïÄFK0’B²$7@åà@TÊ`¥9W¤…àò†¬!³Ü!7a¢@¼-G2ş·%ÙÙ¡ÜI#Q‰:¦DMQŠå¥tñ¦:¥	yã¸2Æ:”‘‹×ü¹@AÊŠ²şº¶‡¶S6ƒz¥Eé#n	{œ'lûwOOËH‹)%³ã6;B§tÄj1³Ò5ËÒ‚ŸÑÚ9æ«É÷ßù*hˆ–¢:\˜â‰1Ïã8{Ø)jtdá‰kõñ´n†íb»ìˆ¿7İáÒ[p,<™~æ§Bf·áÖÌ£Àcï†w#ŒÕÎ¼CµËÏ‚¦¤ÃÃ«‘x„û"Wb`Z²á³Zœ] Âp¯†p\¸»iš–U£õşY(d™G;^~‡#øm
Ï¹|SÑº:'Ü¹q¨x2f]ŒP±ƒœçõMU¹ıS;Ìå ì‹šúıUqMqì;ÿ3yùÏí›ÇwZ@»ŠI+Bÿøõ”//M´—&p‡€I^½q¾qí2ŞŒ´ ÖûWIQŠ[“VMUf7åÎ7Ø­ÛÆ(uú ğ¢^¿·_ı?½3¾9º1³>u„škñ´²ğnÌì èÉék‘{}“X%”œxÂÂ½ŞêZã«µ‰ÕÍ3¢^#[{2Ò|¬$¯+m	»Ü®uªRƒª®¬Gê²ZôÉÃSF›·&õÈåMR’¼?OR"K¢ŒO±†º¯ËMœ–òò”ñÙöji@O„¬ÔiÂ•9BG…È„bIT”åx•K^
tˆÍ±†¬!«†ªÉ²¬­ÉÊ’Üš¨FZ«²’8pò”ñŸZ+¿T œ‡Ğã•b9w*TQY4YYk“£‰
¿9©ÍU¹ìÃK“·öïìõ;ê¢Üµ"¹yo"ÆÓíŒ2ZH(¡.˜vİF# üON@‹(QÁ]§¹%ì8Ïƒ´gŒRFcêD–X>–óèIVÎ²0/Ğ‰p+S“kĞ$Oí%lÂh(Ê	›–ñˆbÀA7M 2K)’	ä8`ÂOmPè¬« `|9/+e‚´†]ÈŠYOÖO	3šËÒKó”¡hwJ‚¯b (¶¨Á<«I{¢¯'¬ÚJ¸¢4'ÑŒgŞçY6TMÑs‚Ø^}vÓƒ£÷ÙÁ«©—+‚Ov­Ë¶å—StQ´*®U6£Ê+wUuaŞ½³{İÓWï^íÛÔT»_øÜFœı@Ih&8#¤½)o– sìÍYåc%Æ Ë¥4:˜NS¤®µ©›Ê’ÂuF
[È!eÅÅ„E[Qê†ã4(v4¿¹˜Œ¿5dÓ°^Ê“†˜Êàb‚)ËÊ+u*ÃÁ+DHHdŠ—\E?ísî1ó¤>ãRº+ÊÈÚ²ÒmÊëšR¤¬l$q“Ö¡6i+	k¨ÌeU;”AIÒAÄ Fb>‹¦«*ÌÊr¬ª$@e(ÍÜ³Ô;”a–›åu¿!˜¥<UpÕhLì!Š"kÂ+Åj\:ÑÏ8m§ëëÜYŒAUa‰•“fpK*É†ª.cÆ–‡åH÷ŞÑZã>MYs}|}²ÍxÇîÓl}?ï»æ&ºïàBxu>kÌ83<‘¥ü}O$O$ÃÜ”ÚØHÒ’¢KO\EOJRL4TÒ	.-wj+2·—á«:kta–(’ù€^d”:I6Ğ¯Õ­ÈÊÉjä4ıòÏu(£à¢edÙ­—¼º@6¥CiWÚkTƒÊÌ\ÍŸïPEĞ²rÌË‘y_ÑŸæÜç£÷g…”¼up
è/t(C'¤¼•pCİŒV#5EMÑTšdåDUÊ1\ÜœNÏ‘39€ŸuÆìÉjÔ¤)%­bÊ[Õ–£®Œ¯éÔ/Âœˆ‘èıT€õg¤YğŞËa»¼¤4	™ Ámà„ök;õ‹¿v’ŒÔÔ¹JÑR(-5¨›q[Äš,»ŠÁ,§$?Ş¡s¤ªpÆj¾ZÌ³¶¸Yn’ƒåØ”vu9tŠRüy ñìµ"H6ÂÕ„)Ò×ÃUOŞÃNL©PÍ‡¹!ˆ°şõ<ƒç{zÎ<®¿ş+|€¸ß—`îoïŒá³íQÜ3†p:k“‰Áï0¥”À¸=*6nLmBãM‘z=„3Ç±sLÄ H&â¥Šq_ËÍñÕÔö<wvwñ?ø ’˜Ö-G”‹Ãpü†òu„¦Ÿ“0uy‡ç!ìâ+>%|Ï"÷¶}ã7RH½yAÁÏúŠ¤3š‘è¤`z|¸“«3¢©z/Û‚!Ãâ¥m9Cèq¿İêÌÚ4Ü÷4^3I#<$âY‹ØÍ‰Õ™ã9ä‘;™;šUÚ´ ‘„Ú—ádá›yd¡ÍÑRğe‰¬‡Tº)£…ï¡$v­5~¹Ò™øF8ç[xZ|öæÙwÍè” ù4(ÁÔšœLì,o¯ìÚ÷–g$c›“"ãÚ¬|I¶$_Ò€oGNnL"0âêØîÂ‰E¡SZÅckãzg”dÉñÒ¸9¹ƒêwf{”/ôÖú„€’²BŠ0˜§öWyîèhàì;Õ¸ŒKDB¢Š«,Ğ×ŒØ¸9¶3y¸p4w<¿»¢±î¯ì@;’z©ä[ìÛ:¸‚ñäÜYŸÑ•"rApé„?ëÕ‰YL™÷°\búÿÒÁ2~Zœ
2d–Ì
bÊŸ"XA.–×–P#Râ"ò¿Ñ¡]° =¥dÜ† íaµe™-bJXåT n¨B³úô~¥è³Ş‰»ñİ³ZaQØà3nÏùÛï`Ê_ı#¡ ±¯0¦ˆ$å@Ğ½€åÃß¸È²Ôşƒïöw-d„©4À;‚õ0¨ £áÁx(f~û;ÜÅîOO:Qk!ˆ¦Ad\Ò‰¸µõ×¿÷3K¯–®Ohcæ%Ól	_ãÈ-÷É×bßòÈØ—1q<4k›3w›»õ(rŸê r4éÔÔÀÓ*ŠõÁ¬Ÿ‘¤½i<3~Jñ‰€á¶úg…~_¸ä*©ã6åÎ»Jñš?ã¥D–‰hĞpÎ§;< âF-O?{"	ê¦õÙ‰ìª…¿ó.ßOŠ³¡%&V5T÷È«„8LËĞqğyŞ‘ÉŸë{;LÎçÉÁøR?b
¶MİˆdH=<•Enf Â2¾¯ƒq% d|µDÕ£—0ÁlPlÈ(™Sİ /Û!ÍqÑç÷w(#iò1‹Ìª.GªºŸÑZ%ÄkJ‡ª.³pN×ßíädD+J‹Ú/Çšñ¦¢¤*iL
kÂ.£¡ßlá—hÿ7¥Mn‰YÀ)±Ë(¿> Ñg¤o³Ñº¼Lsi?Ø¡F.–º!kDœJ»BçN‚cíÉùÀ9dEˆºüxTœ‹'G£=¶Jìs]ÿ/{oåJz‡U…ÂÌpÈ‡³röå…ªBaßèF7zÁ¾ïûÚè}_Æ–r"Ñ:²¢øœÄ‘lQ±lg†²¼ÄŠcÉ¢Eûf‰²#Ù¢h™Ix,j5Q­É½Ô{ıúu=ôŒ(KÉá«ƒWÂ_Õ¿İí¿÷»Ò‹ëì»AØè-OÃß$¯lÃßm²E
”`rk0¹ìÊÌ4k–„·¶Ş{g3·“UD5Ş#`;:ïYd+´½D[·C 
)mˆhŠ³qk	ŸI\DNŞ†{ÿ¹Ìs0$B~”oL²Ã#š¯Ös´r²¶‚—ŠÑÖ!€Æaz¾vü@Ò¦£ñœ—ˆ?=¬¡)ì0°>[Ñú0Å‡¨&üØf((ø¤@ÁH›]&ÍQÄÌº¡qR°‹uü¸Ì(ù)©¿-ÉUËÂº1MJˆXî’é}Î¥¨SöÃOü)·µĞ8‡ >)O’K»*oF\ÙÒŒo·Ÿ…møÉy*F†£<9¯Îkô¨ê n´€¹ÛÔ¢‘è K4€ıÔœ:ZñVÉWÁT÷eSÛ’mº•WA?×Nô 1‹uüô<•‹°Å850/•;?,*½KçRØ‹RHY4öâÏB™Ÿ‘Y18¦WWÌUü#`KÛÿ«“"rğwHµDq[ÖCŞ¸~ sì!ú­ƒpê…-ô^8\ÜµîÁÒ¹Lv}ähíÒq=q`¼“:L„ˆà–,ZFã8qSa%·:m]_‡V5jRSí5ùL>£Ëì3zt›YÄèZ„uQĞú¹9ıQW0ÉZ~˜›™V	T®tKİP6HFa‰7²SŠúósêà¨¶º™í ıâl¼™R‚ªcuıB¯üKœ¿0§FÁh\˜™–†qMtR­”•dˆzº–ŸdE¯ñ“Pæo¡Øü›ÿøŞ{hÛ@ğÌPk›¡²"r¼C»Tèß¸ÛÌÌ~'"ˆË!–Edeü •„O…ç=lÍ/ÍYõM²–˜í¯ÆQè& B{µ¾|=ÑJ€ŠL×¨§àÆ_–™eß:[±’y?&v-×/õòC“½ĞËÒ#M_7x³àá¸¹ÉGï³8C¶"ºU]k× h‰G-6ûÌŞsh=ğøåÙw8î»9¯\ö“›µÏÓÓ”á6Ì#|²
½à<Û09õ‹Èù
^Cle »6¤ã¨œía*•%%gğ®¨GüKj&ñ¬y)DÎîÿ˜|@ñl(-ñ^n\qƒŠRKpÊºÚB[A‰®Ql†§§è©÷õ7ÌÆVÖ0aK2i Úév¹ˆ-ÕUrŠú}!cªÙù{áã‡O
ïùiVV{ÕªĞyx‹Õoœ¯œ®EOWN@¹:ö“¼" \ºôš@†Ò»O¼ç+Ç.³şvéÖÏü_ÉÌø?|ñŞhüÊãhÀşÆ½4TÍ1œqOmy¶—¶zEÄGôyÄÑÕıÙµTë¥48xF5 ëÅì¼­UT4¾ó«@å·dºşQ‡:”éFaTíP|ª•°ĞÍ¸E{§	ıÁ{ï¡ÔŠ¼×%®iÄŠ´9ÎŒ‹¨€ÀwÌšne‘˜´•Äíf÷‹‰|fR­¸Ö¡Ğ<ók·!§Ñ;Só7Í;r±|ºn´cÚÄ³•Ëå£ødLWƒiò ×7 ÷\Ø÷k¢Œüësè´©–÷•Û%;ÁÅ9… «Ä¢a”˜¼fôëøÜıÁnh‡9w¹cb¼ºUò˜ÆzàJWaRŞÌ4“µòy¨ãc2uHÜìçŸPŠÜÌºŞâIài»ÂNôxıpãhãÜ~İT‡~•[¿|±t±zTätMk×­¯ì
”G=s*,oô8ÌĞG†eÄ…V[÷üÇ¨7,îp‡Ø–7§-m¥EÉ\†Íx’Æk–}ZK‚K£®–ø2”ù÷2´â_Ï‰¾Î½ñoÜ¦ì,^¬hVÌ6“ıô¦r_üv‰4"¬RrAë\Øã,{Aza?°ÍmqªĞÊ­œ1b´GÍ+¾PvO"G^="G.\Ê%U@±xù@ğ1şvÃ ÒYÕ6ŠW°j6]Ïõ‹×lS~Êü–L›%'’Û„Ã6¬ªE·ÓÊĞÈÓLv’©‘œº·*]åIaSLvy=së^æÌå! h™dœ­PîJ
-+_¡‰`fBdgtq}#³,à Uˆé‹\™'¾jı’Ìz|é{×B‰$ĞCÉ1Pöü˜¬A¶Pš“H-\@Ã¦‡g¶.İZ¯è"ãÕ¹OÖÖQ–×ùÌvĞraõ®^DÅLC+À‡V¡$ÎÑß·f³MĞ)ÇéF¢Eó„`öPírßl×µ ™&:túù]Š)¥¼)ÎŞ¢ñª››ÀMhÑİÄ°ä©l‚ì?)4Ò\â(1Æ2kÕ9sCÍ¦ŞkäÕ6CÕcìD¿Yô–ådyœ×ˆ”mı½yrMÖJ¶’ÍB“pè6ó½x?7Ñû4 ‘Ä­´%55‘?”½Ç¾rí»¦™MÁ¡ÉQÅ"¼º+œ0Nv­Sƒ@‘.“ó¾Ğ5É¾Gƒ™&¬x`¢D˜y‚˜¾<i%¦ù~¾"Ó)•Gv«ãT“h—F¥‘Ù©q{‡ySg/mjUÛğÕÛ´ábÚ5Ì@h«ÇÄ¹tŠRc‚^FÍ@+7Á[›<øÎJ‹‚#1¨“í*ñİáŠè…	~-J‹šw]ÿ³Œ´LQ3¯gu½K5
Íâfó¢xƒüP3LvUÈïXÇŸÌqIà²Ö¸3¾$›™í«´>ı¤0HÖmUt¨÷ Ì{2~å¿ıäırØu¿ò«"jÅY|kıê/èIƒq2/my÷]{/Œ#Fë³±–Â©³*­j–lÇ8LZaR|Ì
,Î£»J¨YeOe¾*’'3F¡ET,¸1xVvAP¼—ö7°œ$V [ıM‰wn†Çf#¬ŠAÅÖà€!pæ6ËıJD¯–‰5	ˆÖA¿3nÜÈ4bİÊØ¼YÁı/>ÅÃû4
£OëÍaú)õ;7“)‰ÄM×mÜù¯§yøğ—î‘wœşÖC'Å-ßÀnè|ådíXç/0ŠšwægEıáŸ&E1Âvè'ˆ0ÆaátMÌ	¾apâŒD¨İğ¡„ ˆ®hƒ^1aJ<Çe”aCLóB×š¯/£iF\òÚwng°Ğß.ñä‘yb™.=–ıhÑ´¢_UˆuôÈ{Î'“Nf¬ïæ÷MÖÒ,!$ë!mÑú´¾Ê¸ÚM3ÉN¬•db½æ¡ÖËŒÓÃr×©Z²“`)&ÉS5ºå"YS¹®B#Ë©-ê›Øğ#ÿñŞ8‰™Äµnd¨È\1o8î ™¼ZÇùÚùâSÃõ<&ŠÂğîàŞÎ´í£Î˜PÁğÎÍ^j4S®/xIñznŞfŸ¸Kƒ îOËq½Uï~ù^«zr­2Ú§ûÇ«SÆ®Gg	‡Ö®÷¢?ÛOp@‹x¥[)Ş{‰N„bbŠÜIëıx–qN»åİ]…s[A<÷#Š[µûºÂ|Ÿo¨,×W¦Xf–2,1„ e¡y£CoÆh7»¾ÓÈåêåêÙÆÙºÎa–br¼' v†¶B!‚EÏ_ W,m¥,JAeS1èõ+â…˜æÍ}%«ó•½æaÒ¦à3]%O0
 Î%_~lö¨l7šß¹Y$½Şƒr*»ß¨$>ÿß>˜“½™e)K
,G‚ŒY “EP3¨8İØ™i××Ü ÕgL'¡F¡ÔFà!4# ‘
V"Ì2/üÂcºALW(ş¢è‹×EW§ÈPû»”ªƒj¨²Q!­â1Ênza»ô“Œ"5û™:|¯ÍŒ9”%Ñ&wµ¯›¼´MáÊyËŞ¢·4.ö«)è£2ud?.©ãõÄ°ìĞ‹›%G©ëÒVt;*¸ª#“C3E}bN[¸Ì¦q’¯§Yİ$WËòŠÉÑ>5ïV;ÕN¼–ş5(ó¤Ì¬8ŠŠ%SKÛİ,«®'Ûi–rW@P1ös=­Ël'-÷¥¼‘Şõ[CÊé^'÷AµàA¸…DjºÔÌNıHàI0æ¿è'àGT`OÓH¯ƒ²¶vÙF¹aø_ø H3[‹—Q³ÃˆÖŸ–i™¤‚İ&¹Q=ï2:«ÃÂÄ00MLc¨í°Æø$Ÿjƒ"á+½j"µümâk—Üè§S9€Û
.ˆ&}?	¢,&hÜ†ŞÚ
?#Ó?jº}_pdSÕL‚øoÓ°şâ%›îVÜGÉ£C<ª?ï¾¨¦ˆ¢È/op¡/Înxoi7´R’TÎ­0Å(ùCÜN¦GŞ^U'Í‘-ô,‹7c67€9ãH7,§.®—ë‘)\æÿÿ¿rE>{ûJ‰—Ì÷ÚUY¡‰BÄÄÕsğJäŸ.”ÎŸÀø*Èİ¸Ooö™èæE43?(]crL ¥!¼g¶Ÿ¿†÷,“6ÒW?œ1ƒvpö7ğ›ğôWeøï'¿Ü1å/ªæv3&Rç{¹Zb`îWºJ”®V–7l– Æ›Fú‰)åŒ«Çk&×Ñê¾¤TÉƒ<áAq³ó®‹	‹î?\zßÔ¸pòëQä4Š=‰ªõë2ÔôwíÓ7u•®ª³}bà)nÇmO;L«½xKÕŒaoÈğiÉé“(X;s$¿©÷–Úé±Ş¥a” Q¦Ğ”oÉ¼Ç]ˆLLËWvç=zÄ2¶f7Ë½ÂfŞ™ïi½ t[EÕ’™£Ópt¬)š©Qy\›Ü•±Æ¯­ÚmU·DBvNª«l¸Õ‡q)Éi7»r cUGŸè$n—©ã)É	VÒI¬W€Ğ8»;WÏLòîêØàÊ{*›¢‘S¦	_Ù‘sè}¥qšUvªƒÒ(e¥8…%Ãga¥S‚Â¦@»¡GFîÿ
yó;~>!ãŠò…ÍWZ¶ã×'áóõ©¹ªŠ8v}g?GG6*:Éze&‚”RÀfêÅš©¨¦ƒÜĞèQx`Uºi!%˜İf›8ˆ>™:,3;	¨$±.(#@”+ı‚¯4ªöòõ|ÏäËOòÃ’CôqğÏ©Ãa§¹X'‰XL!R®|ßØËm†	$•_RÙT8vãfÁ­c•õD+ÅÓVtòSZTL¢c'•Ø’Ì4`ØYÃ$djJ>»©Gû›˜c—h'l
.İ.÷ˆ2†:^¹V>§FÉ¿Ô¹ıbïµã×ÆwOù/ÓZÛSÖ¸Ã}÷WyùÇw|ÄATHeúö;¤…
¢i;QS°:+D#ËL?);=í Ø(Ø˜óné›ı„ÚÔ”`¢Ñ$ühà£UD½ş”ZÃÉo“®²‘ê¨„x¯Ú­ö}½Ë84öJíL7.¤Ğ›#?(' t;°Í“VÏ°f¾é/k¦Ò½8êŠ^tZBÎ†úîŒÃ¡†è@[r+ğ]˜0š‘ÛAyŸè´"3I¤e×T4	6Şuâ-º«h•¼:Ù şİ¦ê©eÉü<”‰ÊØLÌWâ?i5AüM|sÜÎCŠ&uä—xmd	’nÓ‰Öà×¨£H­ÃrhÉšé'¸ÙíG=ÍòXòd´z!ßŸ%·âwôô“Lú¨{c2êÓè©d¦ÇşgQ{dU¦G¤¼5BÓ¢ÖÈFJÈğj&İM6Un½SïVu’V•EôÀ]“™èR«Gz»¦I„Mn³2Ñú
n“-iM2â¦Ø†Ì{¼ı¦TG-SË¶³\¼oÀÑ­´-ÖÌÔóÎâ¨â)µi´7ÄdFæÉ{›»?EL7·Y»ÜY8Y9[½\¹Ü8-ŸDW÷üJà	§bÔV÷tˆÓœÃJF¡m‡¦™dŞUgu g™íå±Ác²¥Ú©nÅG³¤%ÎÁšW§à¿I™>ÓÌ\†ZÉ!ÑÕV½ÓäÑôK>“‡jGåa‚KÔ“B
mi™µşİ~­[Tsö´àè™Æz»Æ¡õP]Ğ—…¸U)Ä éÔ×*´hß²QÖ,«gê¹ÆA´Ü}I¡¯º o;dÇ­Sa{hòhëÖ²nõÜ­÷œzı´/Hiß±ïîwşà3P*+ÓúWß6üØ•ïSÓ¶÷<°Ó„¶0Z§ilpT{Ú±i’m;Ó“Uúwù¡ïÀ©x£ıleV›ZØ	;´>­ãî÷€mÂ9‰ùúàÃ _XïÚ´59¨b¤›áâ,İHK’Ãà2Ù‹×Ë;tÃÜ°<0µŞè	E‡¾§sç7«n•%Ã&j±€ged!){¢†¸m8®böëëW/*e‹€d‹vÍÀà1º5ı2´H7Ô8Ê“lGÙI¶@wš7&`x{vïI¶˜šÜK¶ø6‰Áb‹‹Û¬’U‡÷ÃxV-.í2$C‡öBxÆëxÆë[V…¿ãï“Êí€ÆŠ¿ãıÒ}x–¾K¿ãYºOªW:Kïg¬ÿj=xŸTßÕ÷“ŞGªGú]z®ôïÇßoz©üÕv^oéwé½®¾ßM×¥÷•¾_ï©½p^çèˆ–’Óh/€úÒ94v­3çĞNŠ’3w
åÊsæ¼úÖsşk:½¹l“äIG®gk¼ Âø*İd'ÅÇx¥äé‡§ğãvØC$,;ÌÓ9D‡é0°>éûMÓûg‹÷ç]¼tVvm_?ÿqúVdi·Ûaı+;1‹ã´ heêY›šW7Àt3lz,ªÀU™:şîL˜`¨6Ù ½O¾Wİ,z5>½uÁXq1ã|’‡2-Mc0ÃCÄú—ÉuMÀ¼hŒĞÕ§òˆ‡ÑyçáÉ5E<ŒÅ7Šo0sgwNñiæÎ‹GºôËPdğ>%V‚~Íw}º×¦ü¯ª‡şúğ¥ûà}ÏÍ~Å³¯+;ÊaK 1Ä’h©,éVÉSz:§Ş(‹Ú³m-]8O¶¸mÿáÆÁú¹ãlí$x÷;mÎéSd×ãé3£'ŸÂò;·(üÔş‡·ÄÍŒ=™¹%¥Ñ²›ÆéZ¼£æ³“‚»€>µ…²$ëT7YWXE³×¡‰ègB%ÁÄ8²kƒRdI7bÖd³à2xéVÙevSŠ#™:¤Ä…¶¬UaKXÔVe;YÏXÔ>ı$ÓÂ¤~êF’ORß	7Ï™Q’ÈxuFáÌHz«oæ´ı÷Š‚+_S:a1µãT;Ù¥Û‰FÌFóÉ–¬Œ÷†vÃg>íÊQ`'xâR:õV’ÑF¶–ï~¿‰8éÎ½´ë?Mˆ9.Tîc‰ú4³<…P—xXfè¨oÚÄÔêSÇKô¨àA¿ô‚fŒ;Ë¸'†uá½<¦è€º„+y­øtS¤7¢6÷á5¼ÏˆY$Õ‰ßñ#fVt<GñX¥„w ŞŠ‰‚Ñæ:qø‡÷DfšıôswuªJOçSƒ&i¨mfwn¢ÇÜ¹Íf,p|ıTF#¸>¼CÃwH¹óÇwÎ^¤b|ÊñØõaçiŸºU'ªjÉV¢NÕcV›â”µÔŸFätÁÍg_3QD!ûË‘´Kö¢Ïè®¢[š d´Uş÷Ò(C²jKæOÓì›fûÕ{¢Ès
tT´|ıóõìGDa/Í°„l‰Æ]íRŒv¢ßÌytŞR;ÅyÊ¬§AMnıe:ô¢f&VÓÍ8›@,såÆ9g¥£ä£ÒX3(µ²í„ELbö-2uÜuÜ£à~Ò’iÇ9£Ïl#ÛC6ã½|-ç¡øxWÔj>)SÚv°²¬¢ïÄ9ˆªfqdth“j§ESì¿"SÇgu‚i\ê™F¹quT¶“,e£½†Ş‘sÀ—w1¾íÿCÖ€zº•Ù,4RŒªı4C·²\šIs_kµúôı4ŠÙ~ıóõì×ä·Ï±V*·Ögà3m’A8ñd7ÙUÚ’5š#¬JÁ<¬¢ÿßÈˆğÑ§¦
×äúS§z¬mà3¿cÎ3;RNÚM"=LYÈVjœë½U—f¤³“õa¸ñ¯ÉĞÜGî·V^]mˆ-IFeQ1d›ìRÖxè,£Ax'Fã+>l=ÚO"§vCD·lvi#ZF»b°ë¢:ëİï7­ÇÖ'w%d;œ’:) &†Ñ©ñj}:É®÷¨AÉí/„AÅ½™À¶°Øñ#ÇekôsU3„m7¬f(ëa $è¯ÚLÍsğĞï”±à^Ï¨û0.§r«j9‡Îniœ•^e³ØT0iìÒÚF6”r{m~íéK‡Ìáâ.£°ê| ™¯G.×Op÷kåÄ~!şx W¡Ã,ì[v£'¾³ĞÙêÅ:ğìß¿wÕVu³‡ëg«gëã†XR–íˆÉu¾®Y>rš×O#ç¡À^hgIÉ†É¥•_Éê—VuÎ‹µ³‹Uqoé»dø4ïX1÷q3å‘ÖT-ÍªØX‹Ò6µÍä,õEÕñoÈÔ!e»cÔmÂa$˜¤`¶‡%Ou\˜”Få!Ì²qº“ù%(ó7eô‚÷“ùØ–nÆ¬DGíÕÚ­ilrè{±Nº²fk²^ŒäÄÚyô$æ±CŞ&f9ÇwĞ/ÖÃ eŞå¶ÂJaßO±w¿OC$¾{I3[u¨Z®Ÿ”Û$kekéz²éª8…%ÑL}Ê|JfEşùİÈv²µÜXã-ŒÒŒÒB5RPgjTq…¦ºñ`êÈ4ÂêM2,­jÅ:©ZÒ¯+]Õ®’3LŒ›İ¼ÊBr4Kğ$Gr
à	;Ú^†9¼vîÕz4ëÆå3'†è–·÷ü¢éßoÙèĞ`¶í`?}L?I`ˆmÄ›&Au3¸tê¸209sãB¯8Öx*ƒb“ àÆ¿%³Ê%h~É7N.„BšaiUyü€2™©%k*FëRº*îJ7…ùİíE§ähº$’²í8Oñ16Öªİ+ùÌÃ¼³êÑÙ+ƒÂ°èÓ?°ßSu›û…±Ù§ßÌÔâ-E+ÓN³ÀYl¤-90ğP ü~×›Y‰v{A}ğ½2såzz‚«ÏfÔ‚˜ò¤Ôl794ê6¼C'YË¹LãÂ(÷@Û´P&ÑQº4c=Ì§â°04¹Ë-¢•ä\zwå¦wÅ(ÚÔŒ‚ÛA¼«Ù¾¿pX¯×ë ˆkŞÛw£7êÛÒ;·8ÒB-‘¡CşpaOØæÔa5{÷ûÂ[¦¯B–ûxÉóMe~®‹ÅbdÃG®^¥fw¿`ü|^¹n¿¤Å\•—ä–ÕÃ\ªïİsPGô^ÁóÃ[?mÙìa¸GD!Ù¯ø÷‚ˆ¨a¶›í7š«¾òèôïo'Å`1‚Ã¬æ—²~=ŞĞzµ^£Kç6ÙO×VÏW.–ÏWÖ»!Ñ95 KÎp=„Ö‡ìûhCŒñƒ§êÜZ7²èİ¯è ²r¼P·f»Î©ó!‚$>	Y7LŠàÖâ¡7¼åß
Öõ €˜Åb»Ö‹ÀÛH*¾o²•°™Ç&Oq¬h6ó› M´#£ÔË÷¼bš>ôûç8Ø>ŞÕÓœÒªs*,)!É¨±zÂ¢q¬R½ºşŞ·:P3W2İ„e1,ö5>urƒ˜Æ¥[Ùn¬/Âeÿ€LR8 ‡ØF´€n¥Qul‘İl'†HE Bæj¢CÆß—!eÉ5®)9EGÅêú¹VnG42VE+^§¸L+‹şTÿà›ñØØ4Å¤|©Åµ«ó{q£ÿµ{öÅè›yUäãAKõÎÂKñmoŒßV:ÎZWŞÂ¤µ?øÎÍ(¬ß§¼‡ÂŠxò(sOn>µ©o?ºô|ì…•—¢ß¼~#wgíãk<qğÄ~ú wš“jÅ>ø's.ÃSİX¯è4Œsîê$ÛJpŸiÄ{•¾f`L¸ñGd„çŸ¾½ğÁÒ–ô¨ØP:K­ä â²zùznR˜Oşƒ¬÷Ô¼÷¤¼ş½è¦nÃH„9.¶lö™=p^½òá¾Ğ²Ğ½£ƒÑ¤;Ì‰`b <£«‘Bˆ¨SèŞ„æcD&˜9jEÑí	ëC‡-	‘jö\Ñ…Ñ©ñ`Z”Â5DX±GàÍ?#Clÿú«÷÷î³Ä½ïğvb'LCÇqĞTPíT75Nm¯ÒÉXS#­EÕR8• ”W<Ôéëoÿâ´¯Q1Éˆo`Û‚Ñç¼äÚ…®bˆ !;HHêˆTMrx›Æ‰èêØg3´‡ÕKŒSşÑ9l7	uï7NÙ^šT6ó "6ó]¯4LØVŒ]OŞnËºµK=„¦ú>ç=¥q»‡úĞhSFUW×sNxeĞ£tî²·ŠYìœZWu\öéœxÂØuîÊ(ß/ûŒ\¶“@$J‡f331ö`ia˜ò¼F døc2øİk¾–óòÊY-¾ë°»e¥´‡ÄœIÏD–Î7 o’Ânxoa{awq/HYEœÒE‚?î†öv—ğ7XxaZ
Ëç„µã¶–ƒäÁÛı¸LHñA×’¼i ¾:o»Ú¤Gİù…{«-Õò¢H¸4D”,‘â õAJ‡tÂ”¨ĞÌÕtí|UãAŠ…_3øD^¢l¸…«)ŞC©ßt;è§Ä•˜9zb@ZğÊ*ax7ÅíqŠø|°œ±ˆÏƒò~	‹Ü°>é7|.RV¤H-`Ğ%¼7¬#•˜{`på
R‹Ù&svCI=ğ<ÌßEŠ"3PG7Ry)pDªû1Ñê›3~&
Î¯øà+é—×ßXzCUûèyù°ğlWQÿpMÛÑä„¢5şªfğXS±­xŞ<Zí<íXßï?r¡±î¾°+<ßÖM~|İ±òVùÜ½áN¿œ`Ë¯)}PïOËÈ¦Ç§ÉŞ¯åÛşXñôÕè‹Ïg]•;h³ùYv~ı}øLjG{Ént+v›œ&‡Ù^™7«t+]W¹µĞšJ_?ÉCI<Zå1z@ÇCĞ²6Æ"Ç?Kùæÿ4ä¸¶QT±<Z©”8yDÓW9GY0Ê	µ£xOô6ÆHbüÀ@¢F×Ed{ï¥ÿ	Ôós2ë¹ôúÍ[äx‘:³ŞW¼S}fó™'SCÕËªë

~|¦Ë×;HH7’ŠW[” §ê9‡ÙaØÔ[“Ø”fŠ™ëp°¼¿pÃ¼Àzdo”
ïÉšš¡rôìPĞÌ9†İ4¶uÇÆ½E3Tû‹·ä­W»¿GÚø #üÙ?¹7ÂßJÜD½ÃSëäÎeÁ‘%2ÓGÂˆ;}€€*ÌPñ­E1û¨í„ARLvI¹ŒœEÖL.ƒSÉ£Â¥ Å¶"°Bz©Y¸ÓŠsèh!gÊ_Úö/Ş§+†u}èÿwzî÷Ò÷ô\?!.DĞæm"4x@4Iñ¯}ÿÖÂ}#Ø7Ìskµ(xƒ:uUÔa}çQÑlõYıíÛ”ÓõRÏÚÒX‹¶f:Ù-˜0Ùº™»LÃb31õ·_™§¦…d†šËvõ<æ:ç•Íz¢FWƒ2¿.Ck3ª)<ÇK@©™¶¥~båù5_ôÕòkÚóYx_}QaB?¨«÷?v˜¥¶m~ƒ Y~½"^|’Ï% >'ã°ÿß¯Õ?zï½ÏS¸á°hª¨ÅpäšÈ¥İ9rsÑ´½~FÎˆ24rÊ{ÜXÄóÏ@Eä#IöÆ²³P
ĞàglÆùĞ•Å>ÓKÖ$ô\ølL¥Š!Y¸ÂÕıVÙìÚÂnPÔ]–f! + &ïB»~ã›sùş÷0NÑñzÎSx­úæ3wİgO
ûOº>Ü]ê‘®'lÚkÇãÈ`¥—3uöÌÕ5³ÿÚã³ƒrÁqí/éØŸ€2¦‚ãÚ_Ò±[><‡wù¼ıëğ®yâ*µÎç…ãÚ_Òı#³Cm‡ãÚ_Ò‘=~zûiœĞ¿)£ŒßYÌ‚‚¬uè†ùQªë—‡FêTf±—ëÇbØæW“MÁ’Vª|¹[™äû…qiXí•{UWabì‹‘_”y¿úÌ¬²–ì¤ÚÙNŒSqY^í3KŞÒ¨âÌu^°/ÍYàMµ%Ñ©¸MCÓ¸â)á3¨NŒèøÛI·Ëv1vò·çØ¶[j[r˜¨g»Š)¤GÚ‘ÉS–¤½ì ìz‡˜åwdŞCJÒc3´böiíe·ŞgrTA3RØÒlbPé—Z´Môvø½9}ZWÖòóf¶E
Êšª•æÒ¬