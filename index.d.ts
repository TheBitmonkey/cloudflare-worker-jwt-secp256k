/**
 * JWT
 *
 * @class
 * @constructor
 * @public
 */
declare class JWT {

    /**
     * Signs a payload and returns the token
     * 
     * @param {object} payload The payload object. To use `nbf` (Not Before) and/or `exp` (Expiration Time) add `nbf` and/or `exp` to the payload.
     * @param {string} secret A string which is used to sign the payload.
     * @param {JWTSignOptions | JWTAlgorithm} options The options object or the algorithm.
     * @throws {Error} If there's a validation issue.
     * @returns {Promise<string>} Returns token as a `string`.
     */
    sign(payload: object, secret: string, options?: JWTSignOptions | JWTAlgorithm): Promise<string>

    /**
     * Verifies the integrity of the token and returns a boolean value.
     * 
     * @param {string} token The token string generated by `jwt.sign()`.
     * @param {string} secret The string which was used to sign the payload.
     * @param {JWTVerifyOptions | JWTAlgorithm} options The options object or the algorithm.
     * @throws {Error | string} Throws an error `string` if the token is invalid or an `Error-Object` if there's a validation issue.
     * @returns {Promise<boolean>} Returns `true` if signature, `nbf` (if set) and `exp` (if set) are valid, otherwise returns `false`. 
     */
    verify(token: string, secret: string, options?: JWTVerifyOptions | JWTAlgorithm): Promise<boolean>

    /**
     * Returns the payload **without** verifying the integrity of the token. Please use `jwt.verify()` first to keep your application secure!
     * 
     * @param {string} token The token string generated by `jwt.sign()`.
     * @returns {object | null} Returns payload `object`.
     */
    decode(token: string): object | null
}
declare const _exports: JWT

type JWTAlgorithm = 'ES256' | 'ES384' | 'ES512' | 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512'

type JWTSignOptions = {
    algorithm?: JWTAlgorithm,
    keyid?: string
    header?: object
}

type JWTVerifyOptions = {
    algorithm?: JWTAlgorithm
    throwError?: boolean
}

export = _exports