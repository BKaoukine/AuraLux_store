import logo from "../Assets/logo.svg";
import user_logo from "../Assets/user-circle-gear.svg";
const NabBar = () => {
	return (
		<div className='w-full flex justify-between py-6 px-12 border-b-[0.8px] border-dashed border-[#256eb]'>
			<div className='flex flex-row items-center gap-2 text-[#263238] text-2xl font-bold'>
				<img src={logo} alt='' />
				<p>AuraLux</p>
			</div>
			<img src={user_logo} alt='' />
		</div>
	);
};

export default NabBar;
