import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from '@/assets/svg/Profile'
import Button from '@/components/Button'
import { fields, initalState } from '@/components/createprofile/data'
import { Loader } from '@/components/Loader'
import TextField from '@/components/TextField'
import { useAddProfileMutation } from '@/redux/services/health/createProfieApi'
import { useGetFixedDetailQuery } from '@/redux/services/health/getFixedRoleApi'
import {
  Wrapper,
  Container,
  Text,
  TextSection,
  ProfileSection,
  Avatar,
  ProfileText,
  Title,
  FieldSection,
  ButtonSection,
  GridSection,
} from '@/styles/components/createprofile'
import { CreateProfileResponse } from '@/utils/requests/createProfileRequest'
import { VALIDATION_SCHEMA_CREATE_PROFILE } from '@/utils/validations/createProfile'

const CreateProfile: React.FC = () => {
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateProfileResponse>({
    resolver: yupResolver(VALIDATION_SCHEMA_CREATE_PROFILE),
    defaultValues: initalState,
  })
  const { data, error, isLoading } = useGetFixedDetailQuery(userId || '')
  useEffect(() => {
    if (data && data.status === 200) {
      setValue('email', data.data.email)
      setValue('role', data.data.role)
    }
  }, [data, setValue])
  const [addProfile] = useAddProfileMutation()
  const onSubmit = async (data: CreateProfileResponse) => {
    const payLoad = {
      email: data.email,
      password: data.password,
      name: data.name,
      username: data.username,
      phone: data.phone,
      role: data.role,
      department: data.department,
    }
    try {
      await addProfile(payLoad)
      navigate('/signin')
    } catch (error) {
      return error
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Container>
      <Wrapper>
        <TextSection>
          <Text variant="h3_Regular"> Create Your Profile </Text>
          <Text variant="h5_Regular"> any text </Text>
        </TextSection>
        <ProfileSection>
          <Avatar>
            <Profile />
          </Avatar>
          <ProfileText>
            <Title variant="h5_Regular"> Profile Picture </Title>
          </ProfileText>
        </ProfileSection>
        <FieldSection>
          <GridSection>
            {fields.map((field) => (
              // Please find reference here @all
              // <Controller
              //   key={field.name}
              //   name={field.name as keyof CreateProfileResponse}
              //   control={control}
              //   render={({ field: { onChange, value } }) => (
              //     <TextField
              //       label={field.label}
              //       value={value}
              //       onChange={(e) => onChange(e.target.value)}
              //       placeholder={field.placeholder}
              //       type={field.type || 'text'}
              //       fullWidth
              //       error={Boolean(errors[field.name as keyof CreateProfileResponse])}
              //       helperText={errors[field.name as keyof CreateProfileResponse]?.message as string}
              //       disabled={field.name === 'email'} // Disable the email field
              //     />
              //   )}
              // />
              <TextField
                control={control}
                key={field.name}
                {...field}
                disabled={field.name === 'email'}
                error={Boolean(errors[field.name as keyof CreateProfileResponse])}
                helperText={errors[field.name as keyof CreateProfileResponse]?.message as string}
              />
            ))}
            <Controller
              name="role"
              control={control}
              render={({ field: { value } }) => <TextField label="Role" value={value} disabled fullWidth />}
            />
          </GridSection>
        </FieldSection>
        <ButtonSection>
          <Button label="Submit" loading={isSubmitting} onClick={handleSubmit(onSubmit)} disabled={isSubmitting} />
        </ButtonSection>
      </Wrapper>
    </Container>
  )
}

export default CreateProfile
