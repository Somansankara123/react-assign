import { RES_URL } from "../constant/utildata";

const Restaurant = (props) => {
    const { ResData } = props;
    

    const {
        cloudinaryImageId,
        avgRating,
        cuisines,
        costForTwo,
        name,
        info: { sla: { deliveryTime } = {} } = {},
    } = ResData?.info ;

    return (
        <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg" alt="res-logo" src={RES_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg"> {name}</h3>
            <h4> {cuisines.join(",")} </h4>
            <h4> {costForTwo}</h4>
            <h5>{avgRating} Stars</h5>
            <h5>{deliveryTime} Minutes</h5>
        </div>
    );
};

export const withPromptedLabel = (Restaurant) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <Restaurant {...props} />
            </div>
        );
    };
};

export default Restaurant;
