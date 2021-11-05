import { ProductSchema } from "../../product.model";
import slugify from "slugify";

// NOTE: passed arr should be like: ['', '', ''] not ['','','']
export const populatingFields = (field: string, ignored: string[]): void => {
    ProductSchema.pre(/^find/, function (next) {
        this.populate({
            path: field,
            select: `-${ignored.join(" -")}`,
        });

        next();
    });
};

export const slugifyIt = (): void => {
    ProductSchema.pre(`save`, function (next) {
        this.slug = slugify(`${this.name}`);

        next();
    });
};
