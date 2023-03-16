import { createContext, useContext, useEffect, useState } from "react";
import gitHub from "../../services/api";
import {
  iRepo,
  iRepoContext,
  iRepoProviderProps,
  iResponseRepo,
} from "./interfaces";

const ReposContext = createContext<iRepoContext>({} as iRepoContext);

const userRepos = () => {
  const context = useContext(ReposContext);
  if (!context) {
    throw new Error("userRepos must be used within an ReposProvider");
  }
  return context;
};

const ReposProvider = ({ children }: iRepoProviderProps) => {
  const [repos, setRepos] = useState<iResponseRepo[]>([]);

  const getRepos = async (): Promise<void | any> => {
    try {
      const { data } = await gitHub.get("/repos", {
        headers: {
          Authorization: `Bearer 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`,
        },
      });
      setRepos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReposContext.Provider value={{ repos, setRepos, getRepos }}>
      {children}
    </ReposContext.Provider>
  );
};

export { ReposContext, ReposProvider, userRepos };
