import type { ParamsProps } from '@edgarguzman/types/params';
import type { Metadata, NextPage } from 'next';

interface ProductProps {
    params: ParamsProps;
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
    return {
        title: params?.slug ?? 'A Dynamic Product Title'
    };
} 

const Product: NextPage<ProductProps> = ({ params }) => {
    return ( 
        <div>
            <div className='px-4 py-10 sm:px-6 lg:px-8'>
                    <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                        {params?.slug}
                    </div>
                    <hr className='my-10'/>
                    <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                        {params?.slug} List
                    </div>
                </div>
        </div>
     );
}
 
export default Product;
