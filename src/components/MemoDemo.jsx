import { memo } from 'react';

const MemoDemo = (props) => {
	console.log(props);

	return <div>MemoDemo</div>;
};

export default memo(MemoDemo);
