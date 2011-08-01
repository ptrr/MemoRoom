class VersionController < ApplicationController
  def index
    @file = UserFile.find_by_id(params[:id])
    @versions = []
    @files = []
    search_history(params[:id])
  end
  private
  def search_history(file_id)
    file_version = Version.find_by_fileid(file_id)
    if !file_version.nil?
      if(@files.count < 1)
        index = 0
      else
        index = @files.count
      end

      if file_version.fileid != file_version.prev_id
        @files[index] = UserFile.find_by_id(file_id)
        search_history(file_version.prev_id)
      else
        @files[index] = UserFile.find_by_id(file_id)
      end

    end
  end
end
