function importAll(inputData) {
    return inputData.keys().map(inputData);
}

const heroCoverImageList = importAll(require.context('../../../images/hero-covers/', false, /\.(png|jpe?g|svg)$/))

export default heroCoverImageList