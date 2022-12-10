import { Schema } from "mongoose";
import slugify from "slugify";

export const populateAndSelectFields = (
    schema: Schema,
    field: string,
    ignored: string[]
): void => {
    schema.pre(/^find/, function (next) {
        this.populate({
            path: field,
            select: `-${ignored.join(" -")}`,
        });

        next();
    });
};

export const slugifyIt = (schema: Schema): void => {
    schema.pre(`save`, function (next) {
        this.slug = slugify(`${this.name}`, { lower: true });

        next();
    });
};
