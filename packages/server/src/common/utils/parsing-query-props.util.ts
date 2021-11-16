const parsingQueryProps = (props: string): string => {
    const readyString = props?.split(",")?.join(" ");
    return readyString;
};

export default parsingQueryProps;
