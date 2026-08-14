import {useState, useEffect, createContext, useContext} from 'react';
    type Fights ={
        fighters: string;
        outcome: string;
        method: string;
        time: string;

    }
    type Event = {
        id: number;
        name: string;
        caption: string;
        image: string;
        date: number;
        fights: Fights[];

    }
    type Fight = {
        opponent: string;
        outcome: string;
        method: string;
        event: string;
        time: string;
    };

    type Athlete = {
        id: number;
        status: string;
        name: string;
        age: string;
        height: string;
        weight: string;
        record: string;
        neighborhood: string;
        fights: Fight[];
    };

    type ApiContextType = {
        events: Event[];
        setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
        athletes: Athlete[];
        setAthletes: React.Dispatch<React.SetStateAction<Athlete[]>>;
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


    // get athletes data
    const [athletes, setAthletes] = useState<Athlete[]>([]);
    useEffect(() => {
        async function getAthletes(){
            const response = await fetch('/athletes.json');
            const result = await response.json();
            //console.log(result.athletes);
            setAthletes(result.athletes);
        }
        getAthletes()
    }, []);

    //get events data
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => {
        async function getPastEvents(){
            const response = await fetch('/pastEvents.json');
            const result = await response.json();
            console.log(result.pastEvents)
            setEvents(result.pastEvents);
        }
        getPastEvents();
    }, []);
    
    return(
        <ApiContext.Provider
            value={{header, setHeader, athletes, setAthletes, events, setEvents}}
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