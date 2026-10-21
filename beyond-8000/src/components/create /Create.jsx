import { useContext, useState } from "react";
import AuthContext from "../../context/auth-context";
import { expeditionApi } from "../../api";
import { useNavigate } from "react-router";

const initialValues = {
    title: '',
    mountain: '',
    country: '',
    difficulty: '',
    duration: '',
    altitude: '',
    max_participants: '',
    start_date: '',
    end_date: '',
    image_url: '',
    description: ''
}

export default function Create() {
    const { accessToken } = useContext(AuthContext)
    const navigate = useNavigate()
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitAction = async () => {
        try {
           await expeditionApi.create(values, accessToken)
            navigate('/expeditions')
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <section id="add-expedition" className="section form-section">
            <div className="container narrow">
                <div className="form-heading">
                    <span className="eyebrow">SHARE YOUR ADVENTURE</span>
                    <h2>Create an Expedition</h2>
                    <p>
                        Have a route in mind? Create your own expedition and invite other
                        adventurers.
                    </p>
                </div>
                <form className="expedition-form" action={submitAction}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Expedition title</label>
                            <input type="text"
                                name="title"
                                placeholder="e.g. Everest Base Camp 2027"
                                value={values.title} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Mountain</label>
                            <input type="text"
                                name="mountain"
                                placeholder="e.g. Mount Everest"
                                value={values.mountain} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" 
                            name="country"
                            placeholder="Nepal" 
                            value={values.country} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Difficulty</label>
                            <input type="text" 
                            name="difficulty"
                            placeholder="e.g Easy" 
                            value={values.difficulty} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-row three">
                        <div className="form-group">
                            <label>Duration</label>
                            <input type="number" 
                            name="duration"
                            placeholder={14} 
                            value={values.duration} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Altitude (m)</label>
                            <input type="number" 
                            name="altitude"
                            placeholder={5364} 
                            value={values.altitude} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Max participants</label>
                            <input type="number" 
                            name="max_participants"
                            placeholder={20} 
                            value={values.max_participants} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Start date</label>
                            <input type="date" 
                            name="start_date"
                            value={values.start_date} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label>End date</label>
                            <input type="date" 
                            name="end_date"
                            value={values.end_date} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input type="url" 
                        name="image_url"
                        placeholder="https://images.unsplash.com/..."
                        value={values.image_url} onChange={changeHandler} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            rows={6}
                            name="description"
                            placeholder="Tell adventurers about your expedition..."
                            value={values.description} onChange={changeHandler}
                        />
                    </div>
                    <button className="btn btn-primary btn-large" type="submit">
                        Create Expedition
                    </button>
                </form>
            </div>
        </section>
    );
}