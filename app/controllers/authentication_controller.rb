class AuthenticationController < ApplicationController
  skip_before_action :authenticate_user

  def login
    @user = User.find_by_username(params[:username])
    if @user&.authenticate(params[:password])
      token = JwtToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: {
               token:,
               exp: time.strftime { '%m-%d-%Y %H:%M' },
               user: { id: @user.id, username: @user.username, email: @user.email }
             },
             status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
