export default function Create() {
    return(
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
                        <form className="expedition-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Expedition title</label>
                                    <input type="text" placeholder="e.g. Everest Base Camp 2027" />
                                </div>
                                <div className="form-group">
                                    <label>Mountain</label>
                                    <input type="text" placeholder="e.g. Mount Everest" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" placeholder="Nepal" />
                                </div>
                                <div className="form-group">
                                    <label>Difficulty</label>
                                    <select>
                                        <option>Easy</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                        <option>Extreme</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row three">
                                <div className="form-group">
                                    <label>Duration</label>
                                    <input type="number" placeholder={14} />
                                </div>
                                <div className="form-group">
                                    <label>Altitude (m)</label>
                                    <input type="number" placeholder={5364} />
                                </div>
                                <div className="form-group">
                                    <label>Max participants</label>
                                    <input type="number" placeholder={20} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Start date</label>
                                    <input type="date" />
                                </div>
                                <div className="form-group">
                                    <label>End date</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="url" placeholder="https://images.unsplash.com/..." />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    rows={6}
                                    placeholder="Tell adventurers about your expedition..."
                                    defaultValue={""}
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