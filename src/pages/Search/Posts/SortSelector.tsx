
import Recent from "@pages/Search/Posts/Recent";
import Oldest from "@pages/Search/Posts/Oldest";
import MostLiked from "@pages/Search/Posts/MostLiked";

export const SortSelector = () => {

    return (
        <div>
            <div className="flex gap-2 flex-wrap">
                <Recent />
                <Oldest />
                <MostLiked />
            </div>
        </div>
    );
}; 