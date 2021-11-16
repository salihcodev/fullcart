// utils:
import parsingQueryProps from "../utils/parsing-query-props.util";

export default class APIFeaturesBuilder {
    readonly reqQuery;
    public modelQuery;

    constructor(modelQuery: any, reqQuery: any) {
        this.modelQuery = modelQuery;
        this.reqQuery = reqQuery;
    }

    public filtering(): typeof this {
        const shallowQr = { ...this.reqQuery };
        const excludedQrFields = ["sort", "page", "limit", "fields"];

        /*
            clean some fields from a copy of 'reqQuery'
            those fields gonna be handled another way.
        */
        for (const key in shallowQr) {
            if (excludedQrFields.includes(key)) delete shallowQr[key];
        }

        /* 
            re-shaping the rest of the reqQuery = shallowQr
            to make it looks like mongo's query.
        */
        let reqQueryString = shallowQr ? JSON.stringify(shallowQr) : "";
        reqQueryString = reqQueryString.replace(
            /\b('lte|lt|gte|gt')\b/g,
            (match) => `$${match}`
        );
        const reqQueryProcessed = reqQueryString
            ? JSON.parse(reqQueryString)
            : {};

        this.modelQuery = this.modelQuery.find(reqQueryProcessed);
        return this;
    }

    public selectingFields(): typeof this {
        const { fields } = this.reqQuery;

        // select specifics fields to be responding with.
        this.modelQuery = fields
            ? this.modelQuery.select(parsingQueryProps(fields))
            : this.modelQuery.select("-__v");

        return this;
    }

    public paginating(): typeof this {
        const { page, limit } = this.reqQuery;

        // calculate params.
        const p = Number(page) || 1;
        const l = Number(limit) || 50;
        const skip = (p - 1) * l;

        this.modelQuery = this.modelQuery.skip(skip).limit(l);
        return this;
    }

    public sorting(): typeof this {
        const { sort } = this.reqQuery;

        // sorting via client criteria ether way sorting via creation time.
        this.modelQuery = sort
            ? this.modelQuery.sort(parsingQueryProps(sort))
            : this.modelQuery.sort("-createdAt");

        return this;
    }
}
