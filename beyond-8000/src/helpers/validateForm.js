import { toast } from "react-toastify";


export const createEdit = (values) => {
    if (!values.title.trim()) {
        toast.error("Title is required");
        return false;
    }

    if (!values.mountain.trim()) {
        toast.error("Mountain is required");
        return false;
    }

    if (!values.country.trim()) {
        toast.error("Country is required");
        return false;
    }

    if (!values.difficulty.trim()) {
        toast.error("Difficulty is required");
        return false;
    }

    if (!values.duration) {
        toast.error("Duration is required");
        return false;
    }

    if (!Number.isInteger(Number(values.duration))) {
        toast.error("Duration must be a whole number");
        return false;
    }

    if (!values.altitude) {
        toast.error("Altitude is required");
        return false;
    }

    if (!Number.isInteger(Number(values.altitude))) {
        toast.error("Altitude must be a whole number, e.g. 8849");
        return false;
    }

    if (!values.max_participants) {
        toast.error("Maximum participants is required");
        return false;
    }

    if (
        !Number.isInteger(Number(values.max_participants)) ||
        Number(values.max_participants) < 1
    ) {
        toast.error("Maximum participants must be at least 1");
        return false;
    }

    if (!values.start_date) {
        toast.error("Start date is required");
        return false;
    }

    if (!values.description.trim()) {
        toast.error("Description is required");
        return false;
    }

    return true;
}

export const login = (email, password) => {
    if (!email) {
        toast.error("Email is required");
        return false
        
    }

    if(!password){
        toast.error("Password is required")
        return false
    }
     
    return true
}

export const register = (email, password, confirmPassword) => {
  if (!email) {
        toast.error("Email is required");
        return false 
    }

    if(!password){
        toast.error("Password is required")
        return false
    }

    if(!confirmPassword){
        toast.error("You must confirm your password")
        return false
    }

    if(password !== confirmPassword){
        toast.error("Passwords must match")
        return false
    }

    return true
}