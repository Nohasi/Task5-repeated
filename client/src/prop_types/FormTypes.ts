// Types for all props in the RepeatsForm.tsx component
export interface FormTypes {
    sentence: string, 
    setSentence: React.Dispatch<React.SetStateAction<string>>, 
    setResLetter: React.Dispatch<React.SetStateAction<string>>, 
    setResNumber: React.Dispatch<React.SetStateAction<number>>, 
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>, 
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}