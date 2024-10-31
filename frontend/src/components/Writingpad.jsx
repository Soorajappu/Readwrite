import React, {useState , useEffect} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Subfooter from './Subfooter';
import AxiosInstance from './AxiosInstance'




const Writingpad = ({username}) => {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [partTitle, setPartTitle] = useState('');
    const [storyContent, setStoryContent] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [authName, setAuthName] = useState(username)
    const token = localStorage.getItem('token');
    const [isSubmitting, setIsSubmitting] = useState(false);  // New state to manage button state
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [backgroundImage, setBackgroundImage] = useState(null); 

    
    
    
    const handlePublish = async () => {

        setIsSubmitting(true); // Disable button on submission

        
    

        // Data to be inserted into the first table (stories)
        const storyData = {
            auther_name: authName,
            book_name: title,
            description: description,
            created_at: new Date(),
            published: true,
            genres: genre,
            no_of_pages: pageNumber,
            background_image: backgroundImage,
            language: language,
        };

        if (backgroundImage) {
            // If background image exists, attach it to storyData
            storyData.background_image = backgroundImage;
        }

        console.log(storyData)
    
        try {
            // Step 1: Insert into the first table (create a new story)
            const storyResponse = await AxiosInstance.post('create_story/', storyData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                    
                },
            });
            console.log('Story Response:', storyResponse);
            // Check if the response contains the necessary data
            if (!storyResponse || !storyResponse.data || !storyResponse.data.id) {
                throw new Error('Invalid response from server');
            }
    
            // Data to be inserted into the second table (pages), referencing the newly created story ID
            const pageData = {
                book: storyResponse.data.id, // Foreign key referencing the created story
                title: partTitle,
                content: storyContent,
                page_number: pageNumber,
                published: true,
            };
    
            // Step 2: Insert into the second table (add a page to the created story)
            await AxiosInstance.post('add_page/', pageData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
    
            // Inform the user of the successful operation
            alert('Story published successfully!');
        } catch (error) {
            // Handle errors appropriately
            console.error('Error publishing story:', error);
            alert('Error publishing story: ' + (error.response?.data?.message || error.message));
            setIsSubmitting(false); // Re-enable button if there's an error
        }
    };

    const handleBackgroundImageChange = (e) => {
        // When user selects an image file
        const file = e.target.files[0];
        setBackgroundImage(file); // Store the file in state
    };

    const handleAuthorChange = (e) => {
        setAuthName(e.target.value);
      };

      useEffect(() => {
        setIsSubmitting(false); // Re-enable button if any form field changes
    }, [title, genre, description, partTitle, storyContent, pageNumber, authName]);


  return (
    <>
    {/* Navbar */}
        <div className='shadow-md'>
            <div className=''>
                <div className='flex px-4 mt-5'>
                    <div className='pt-3'>
                        <span className='hidden font-bold text-lg mx-2 md:block'>
                            Write Your Stories
                        </span>
                    </div>
                    <div className='flex ml-auto'>
                        <div className='flex'>
                            <button onClick={handlePublish} className='hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 text-orange-600' disabled={isSubmitting}>
                                {isSubmitting ? 'Published' : 'Publish'}
                            </button>
                            <button className=' hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Save
                            </button>
                            <button className=' hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Preview
                            </button>
                            <button className=' hover:bg-orange-600 hover:text-white rounded-full px-3 my-2 p-1 md:block text-orange-600'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header */}
        <div className='mx-16 bg-zinc-400 mt-4 mb-28 pb-14'>
            <div>
                <div className='grid grid-flow-col '>
                    <div className=' col-span-4'></div>
                    <div className='p-2 col-span-1'>
                        <div className=''>
                            <div>
                                <div className='flex gap-1 justify-end'>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Writing pad */}
            <div>
                <div>
                    <div className='p-3 pl-3 lg:ml-3 lg:-mt-1 -pb-[14px] lg:flex gap-4'>
                        <input className=' w-full lg:w-[250px] p-1 text-xl font-bold' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className=' w-full lg:w-[250px] p-1 mt-3 lg:mt-0' type="text" placeholder="Genres" value={genre} onChange={(e) => setGenre(e.target.value)} />
                        <input className=' w-full lg:w-[40px] p-1 mt-3 lg:mt-0' type="text" placeholder="language" value={language}  />
                    </div>
                    <div className='p-3'>
                        <textarea className='p-1 w-full' name="description" id="description" cols="10" rows="5" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <input className=' w-full lg:w-[250px] p-1 mb-1 font-bold' type="text" placeholder="Part Title" value={partTitle} onChange={(e) => setPartTitle(e.target.value)} />
                    </div>
                    <div className='p-3 pb-10'>
                        <div className="border-b"></div>
                        <div>
                            <ReactQuill className='h-80'
                                theme="snow"
                                value={storyContent}
                                onChange={setStoryContent}
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                                        [{size: []}],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{'list': 'ordered'}, {'list': 'bullet'}, 
                                            {'indent': '-1'}, {'indent': '+1'}],
                                        ['link', 'image', 'video'],
                                        ['clean']                                        
                                    ]
                                }}
                                formats={[
                                    'header', 'font', 'size',
                                    'bold', 'italic', 'underline', 'strike', 'blockquote',
                                    'list', 'bullet', 'indent',
                                    'link', 'image', 'video'
                                ]}
                                placeholder="Start writing your story..."
                            />
                        </div>
                    </div>
                    <div className='p-10 lg:p-12 lg:absolute right-16 lg:-mt-10 -pb-[14px] gap-20 lg:flex'>
                        <input className='p-1 w-full lg:w-[250px] ' type="text" placeholder="Auther" value={authName} onChange={handleAuthorChange} />
                        <input type="number" className='p-1 w-12 lg:w-[60px] mt-3 lg:mt-0' placeholder="Pg_No" value={pageNumber} onChange={(e) => setPageNumber(e.target.value)} />
                        <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
                    </div>
                </div>
            </div>
        </div>
        <Subfooter />
    </>
  )
}

export default Writingpad