export default function edit() {
    return(
                        <section id="edit-expedition" className="section form-section">
                    <div className="container narrow">
                        <div className="form-heading">
                            <span className="eyebrow">MANAGE EXPEDITION</span>
                            <h2>Edit Expedition</h2>
                        </div>
                        <form className="expedition-form">
                            <div className="form-group">
                                <label>Expedition title</label>
                                <input type="text" defaultValue="Everest Base Camp 2027" />
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input
                                    type="url"
                                    defaultValue="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    rows={6}
                                    defaultValue={
                                        "Follow the legendary trail to the base of Mount Everest."
                                    }
                                />
                            </div>
                            <div className="form-actions">
                                <button className="btn btn-primary" type="submit">
                                    Save Changes
                                </button>
                                <a href="#my-expeditions" className="btn btn-outline">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </section>
     );
}