'use strict';

module.exports = {
	port: parseInt(process.env.PORT, 10) || 8001,
	// url: 'mongodb://localhost:27017/elm',
	url: `mongodb://49.232.205.124:27017/zccode?compressors=disabled&gssapiServiceName=mongodb`,
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
	    secure:   false,
	    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}