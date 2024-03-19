This is the initial start of a project.


NPM: npm is a  package manager for JavaScript and makes it easy to install, share, and manage dependencies.

package.json:  The package.json file contains information about your module that helps in managing dependencies. It also a configuration for NPM.

package-lock.json: This is a file which contains the exact version used in package.json and lock the version to avoid any issues while installing the app in production or anywhere in the system.

Node modules: Its is a file which contains all the dependencies  that are needed by your application.

^(caret): this is a symbol used in package.json file which upgrades the minor version of the dependency.
~(Tilde) : It's a symbol used in package.json file which adds the Major version of the dependency.

Integrity in package-lock.json : A string representing an SHA-1 hash of the package contents. If you have integrity it use the hash to get the exact version.