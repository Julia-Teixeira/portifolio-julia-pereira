import { createContext, useContext, useState } from "react";
import gitHub from "../../services/api";
import { iRepoContext, iRepoProviderProps, iResponseRepo } from "./interfaces";

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
