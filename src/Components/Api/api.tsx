import {useState, useEffect, createContext, useContext} from 'react';


    type ApiContextType = {
        header: boolean;
        setHeader: React.Dispatch<React.SetStateAction<boolean>>;
        //projects: Project[];
        //setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
        //simulations: Simulation[];
        //setSimulations: React.Dispatch<React.SetStateAction<Simulation[]>>;
        //catalogue: Catalogue[];
        //setCatalogue: React.Dispatch<React.SetStateAction<Catalogue[]>>;
        //showNav: boolean;
        //setShowNav:  React.Dispatch<React.SetStateAction<boolean>>;
    };

    const ApiContext = createContext<ApiContextType | null>(null);    

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
    const [header, setHeader] = useState<boolean>(false);
    useEffect(() => {
    function handleScroll() {
        setHeader(window.scrollY >= 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
 
    return(
        <ApiContext.Provider
            value={{header, setHeader}}
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider, check index file and wrap app");
    }

    return context;
}