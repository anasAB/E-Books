
export const openPreviewLink = (linkUrl: string) => {
    window.open(linkUrl, '_blank', 'noopener,noreferrer,height=600,width=800');
};

export const calculateSavings = (oldPrice: number, newDiscountedPrice: number) => {
    const difference = oldPrice - newDiscountedPrice;

    // Calculate the percentage savings
    const percentageSavings = (difference / oldPrice) * 100;
    // return  percentageSavings.toFixed(2) + '' + '%' ;
    let saveingType = ""
    if(percentageSavings > 0  && percentageSavings < 10) saveingType = "not-bad"
    if(percentageSavings > 10  && percentageSavings < 20) saveingType = "good"
    if(percentageSavings > 20  && percentageSavings < 30) saveingType = "very-good"

    return  percentageSavings.toFixed(2) + '' + '%'
}