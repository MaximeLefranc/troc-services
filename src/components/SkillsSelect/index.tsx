import { useDispatch, useSelector } from 'react-redux';
import Select, { MultiValue } from 'react-select';
import { actionAddInscriptionSkills } from '../../actions/inscription';
import { GlobalState } from '../../reducers';
import './../InscriptionForm/styles.scss';

export interface Category {
  id: number;
  name: string;
  skills: { id: number; name: string }[];
}

export interface Skills {
  value: number;
  label: string;
  isDisabled?: true;
}

function SkillsSelect(): JSX.Element {
  const dispatch = useDispatch();
  const skillsFromAPI = useSelector(
    (state: GlobalState) => state.advertisements.listOfSkills
  );
  const skillsUser = useSelector(
    (state: GlobalState) => state.inscription.skills
  );

  const optionList: Skills[] = [];
  skillsFromAPI.map((category: Category) => {
    optionList.push({
      value: category.id,
      label: category.name,
      isDisabled: true,
    });
    category.skills.map((skill) => {
      optionList.push({
        value: skill.id,
        label: skill.name,
      });
    });
  });

  // let test = [];
  // optionList.forEach((skill) => {
  //   skillsUser.forEach((skillToSearched) => {
  //     if (skill.value === skillToSearched) {
  //       test.push(skill);
  //     }
  //   });
  // });

  // console.log(test);

  const handleChange = (newValue: MultiValue<Skills>) => {
    //const idSkills = newValue.map((element) => element.value);
    dispatch(actionAddInscriptionSkills(newValue));
  };

  return (
    <Select
      defaultValue={skillsUser}
      isMulti
      name="colors"
      options={optionList}
      className="select__skills"
      classNamePrefix="select"
      placeholder="Mes Compétences *"
      onChange={handleChange}
    />
  );
}

export default SkillsSelect;
