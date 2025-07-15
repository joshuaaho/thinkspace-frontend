
import { useSearchParams } from "react-router-dom";
import Button from "@common/Button";
import { FaUser, FaNewspaper } from "react-icons/fa";

type SearchType = "posts" | "users";

const TypeSelector = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchType = searchParams.get("type");

    const updateType = (type: SearchType) => {
        setSearchParams(prev => {
            prev.set("type", type);
            return prev;
        });
    };

    return (
        <div>
            <div className="flex gap-2">
                <Button
                    
                    variant={searchType === "posts" ? "primary" : "base-1"}
                    size="sm"
                    onClick={() => updateType("posts")}
                    renderIcon={(props) => (
                        <FaNewspaper size={props.iconSize} />
                    )}
                >
                    Posts
                </Button>
                <Button
                    variant={searchType === "users" ? "primary" : "base-1"}
                    size="sm"
                    onClick={() => updateType("users")}
                    renderIcon={(props) => <FaUser size={props.iconSize} />}
                >
                    Users
                </Button>
            </div>
        </div>
    );
}; 

export default TypeSelector;